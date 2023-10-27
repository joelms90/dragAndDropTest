<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
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
        $categories = $this->entityManager->getRepository(Card::class)->findBy([], [], 3);
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
    public function shuffleCards(Request $request): JsonResponse
    {
        // Get the 'idValues' query parameter from the request
        $idValues = explode(',', $request->query->get('categoriesIds'));
        // Check if 'idValues' is an array and not empty
        if (!is_array($idValues) || empty($idValues)) {
            // Handle invalid input, return an error response or handle it as needed
            return new JsonResponse(['error' => 'Invalid idValues parameter'], 400);
        }

        // Cast the ID values to integers for safety
        $idValues = array_map('intval', $idValues);

        // Define the criteria to filter by ID values
        $criteria = ['category_id' => $idValues];

        // Retrieve the records based on the criteria
        $cards = $this->entityManager->getRepository(Card::class)->findBy($criteria);

        // Randomize and Serialize the array of entities to JSON
        shuffle($cards);
        // Limit the results to at most 5 cards
        $limitedCards = array_slice($cards, 0, 5);
        $jsonData = [];
        foreach ($limitedCards as $card) {
            $jsonData[] = [
                'id' => $card->getId(),
                'text' => $card->getText(),
                'categoryId' => $card->getCategoryId(),
            ];
        }

        return new JsonResponse($jsonData, 200);
    }

}
