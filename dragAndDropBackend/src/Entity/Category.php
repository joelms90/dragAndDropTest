<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\DBAL\Types\Types;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
#[ORM\Table(name: 'categories')]
class Category
{
    #[ORM\Id, ORM\Column(type: 'integer'), ORM\GeneratedValue]
    private ?int $id = null;
    #[ORM\Column(name:'`text`', length: 100)]
    public $text;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(string $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }
    
    public function setText(string $text): static
    {
        $this->text = $text;

        return $this;
    }
}
