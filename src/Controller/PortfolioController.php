<?php

namespace App\Controller;

use App\Repository\PortfolioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    /**
     * @var PortfolioRepository
     */
    private $portfolioRepository;

    public function __construct(PortfolioRepository $portfolioRepository)
    {
        $this->portfolioRepository = $portfolioRepository;
    }

    /**
     * @Route("/api/portfolios", name="api_portfolio",methods={"GET"})
     * @return Response
     */
    public function getPortfolio()
    {
        $portfolios = $this->portfolioRepository->findAll();

        return $this->json($portfolios, 200, [], ['groups' => 'portfolio:read']);
    }
}
