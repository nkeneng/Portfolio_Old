<?php

namespace App\Controller;

use App\Repository\ServicesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ServiceController extends AbstractController
{

    /**
     * @var ServicesRepository
     */
    private $servicesRepository;

    public function __construct(ServicesRepository $servicesRepository)
    {
        $this->servicesRepository = $servicesRepository;
    }


    /**
     * @Route("/api/services", name="api_service",methods={"GET"})
     */
    public function index()
    {
        $services = $this->servicesRepository->findAll();
        return $this->json($services, 200, []);
    }

}
