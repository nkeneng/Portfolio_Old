<?php

namespace App\Controller\Admin;

use App\Entity\Messages;
use App\Entity\Portfolio;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    #[Route('/berghain', name: 'admin')]
    public function index(): Response
    {
        return $this->render('EasyAdminBundle/welcome.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('MyPortfolio');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
         yield MenuItem::linkToCrud('Portfolio', 'fas fa-list', Portfolio::class);
         yield MenuItem::linkToCrud('Messages', 'fas fa-list', Messages::class);
    }
}
