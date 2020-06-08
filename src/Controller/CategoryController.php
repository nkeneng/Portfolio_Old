<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{

    /**
     * @var CategoryRepository
     */
    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @Route("/api/categories", name="api_category",methods={"GET"})
     * @return Response
     */
    public function getCategories()
    {
        $categories = $this->categoryRepository->findAll();

        return $this->json($categories, 200, [], ['groups' => 'category:read']);
    }
}
