<?php

namespace App\Controller;

use App\Repository\ExperienceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ExperienceController extends AbstractController
{
    /**
     * @Route("/api/experience", name="experience",methods={"GET"})
     */
    public function index()
    {
        $experiences = $this->experienceRepository->findAll();

        return $this->json($experiences, 200, []);
    }

    /**
     * @var ExperienceRepository
     */
    private $experienceRepository;

    public function __construct(ExperienceRepository $experienceRepository)
    {
        $this->experienceRepository = $experienceRepository;
    }

}
