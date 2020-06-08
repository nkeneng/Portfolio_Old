<?php

namespace App\Controller;

use App\Entity\Messages;
use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class MessageController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var ValidatorInterface
     */
    private $validator;
    /**
     * @var EntityManagerInterface
     */
    private $entity;

    public function __construct(SerializerInterface $serializer,
                                ValidatorInterface $validator,
                                EntityManagerInterface $entity)
    {
        $this->serializer = $serializer;
        $this->validator = $validator;
        $this->entity = $entity;
    }

    /**
     * @Route("/api/message",name="api_message",methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function postMessage(Request $request)
    {
        $json = $request->getContent();
        try {
            /** @var Messages $message */
            $message = $this->serializer->deserialize($json, Messages::class, 'json');
            $message->setCreatedAt(new \DateTime());
            /*
             * validation de l'entite passe
             * l'entite doit etre conforme aux regles de validation applique au niveau de l'entite message
             */
            $errors = $this->validator->validate($message);
            if (count($errors) > 0) {
                return $this->json($errors, 400);
            }
            $this->entity->persist($message);
            $this->entity->flush();

            return $this->json($message, 201, []);

        } catch (NotEncodableValueException $encodableValueException) {
            return $this->json([
                'status' => 400,
                'message' => $encodableValueException->getMessage()
            ], 400);
        }

    }
}
