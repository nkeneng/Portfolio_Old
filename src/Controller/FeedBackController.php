<?php

namespace App\Controller;

use App\Repository\FeedBackRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class FeedBackController extends AbstractController
{
    /**
     * @var FeedBackRepository
     */
    private $feedBackRepository;

    public function __construct(FeedBackRepository $feedBackRepository)
    {
        $this->feedBackRepository = $feedBackRepository;
    }

    /**
     * @Route("/api/feedback", name="feed_back",methods={"GET"})
     */
    public function index()
    {
        $feedBacks = $this->feedBackRepository->findAll();
        return $this->json($feedBacks, 200, []);
    }
}
