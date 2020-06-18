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
//    /**
//     * @var EntityManagerInterface
//     */
//    private $entity;
//
//    public function __construct(UserPasswordEncoderInterface $passwordEncoder,EntityManagerInterface $entity)
//    {
//
//        $this->passwordEncoder = $passwordEncoder;
//        $this->entity = $entity;
//    }

    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
//        $user = new User();
//        $user->setEmail('admin.junior@gmail.com');
//        $user->setPassword($this->passwordEncoder->encodePassword(
//            $user,
//            'React_2020@portfolio'
//        ));
//        $user->setRoles(['ROLE_ADMIN']);
//        $user->setApiToken('GcYdGiatXn2HlPlKWr5yk8PUUPQcU4hHioATiouOjc84OlHtIIZ9a3fpCdG1Q29T7NZ1x1dCRMtrtpKp0bUtvCIl4gRilw9llnoPAWq1yKs1T8hC4X5XAYjgy3gmg4m4QApuTbu7HqnQ');
//
//        $this->entity->persist($user);
//        $this->entity->flush();


        return $this->render('index/index.html.twig');
    }

}
