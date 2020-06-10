<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class IndexController extends AbstractController
{
//    private $passwordEncoder;
////    /**
////     * @var EntityManagerInterface
////     */
////    private $entity;
////
////    public function __construct(UserPasswordEncoderInterface $passwordEncoder,EntityManagerInterface $entity)
////    {
////
////        $this->passwordEncoder = $passwordEncoder;
////        $this->entity = $entity;
////    }

    /**
     * @Route("/{reactRouting}", name="home")
     */
    public function index()
    {
//        $user = new User();
//        $user->setEmail('nkeneng.junior@gmail.com');
//        $user->setPassword($this->passwordEncoder->encodePassword(
//            $user,
//            'React_2020@portfolio'
//        ));
//        $user->setRoles(['ROLE_ADMIN']);
//        $user->setApiToken('
//
//
//        ');

//        $this->entity->persist($user);
//        $this->entity->flush();


        return $this->render('index/index.html.twig');
    }

}
