<?php

namespace App\Entity;

use App\Repository\PortfolioRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PortfolioRepository::class)
 */
class Portfolio
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("portfolio:read")
     */
    private $title;

    /**
     * @ORM\Column(type="boolean")
     * @Groups("portfolio:read")
     */
    private $involvement;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="portfolio")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("portfolio:read")
     */
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getInvolvement(): ?bool
    {
        return $this->involvement;
    }

    public function setInvolvement(bool $involvement): self
    {
        $this->involvement = $involvement;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }
    public function __toString()
    {
        return $this->getTitle();
    }
}
