<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Category;
use App\Entity\Card;

class MyController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/categories', name: 'shuffle_categories')]
    public function shuffLeCategories(): JsonResponse
    {
        $categories = $this->entityManager->getRepository(Category::class)->findAll();
         // Randomize and Serialize the array of entities to JSON
        shuffle($categories);
        $jsonData = [];
        foreach ($categories as $category) {
            $jsonData[] = [
                'id' => $category->getId(),
                'text' => $category->getText(),
            ];
        }

        return new JsonResponse($jsonData, 200);

    }

    #[Route('/cards', name: 'shuffle_cards')]
    public function shuffleCards(): JsonResponse
    {
        $cards = $this->entityManager->getRepository(Card::class)->findAll();
         // Randomize and Serialize the array of entities to JSON
        shuffle($cards);
        $jsonData = [];
        foreach ($cards as $card) {
            $jsonData[] = [
                'id' => $card->getId(),
                'text' => $card->getText(),
                'categoryId' => $card->getCategoryId(),
            ];
        }

        return new JsonResponse($jsonData, 200);

    }
}
