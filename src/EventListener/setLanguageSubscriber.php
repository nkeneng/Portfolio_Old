<?php

namespace App\EventListener;

use App\Entity\Experience;
use App\Entity\FeedBack;
use App\Entity\Services;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\RequestStack;

class setLanguageSubscriber implements EventSubscriberInterface
{

    /**
     * @var RequestStack
     */
    private $requestStack;
    /**
     * @var EntityManagerInterface
     */
    private $manager;
    /**
     * @var string[]
     */
    private $languages;

    /**
     * EasyAdminSubscriber constructor.
     * @param RequestStack $requestStack
     * @param EntityManagerInterface $manager
     */
    public function __construct(RequestStack $requestStack, EntityManagerInterface $manager)
    {
        $this->requestStack = $requestStack;
        $this->manager = $manager;
        $this->languages = ['en', 'de', 'fr'];
    }

    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityPersistedEvent::class => 'onPrePersist',
            BeforeEntityUpdatedEvent::class => 'onPreUpdate',
        ];
    }


    public function onPrePersist(BeforeEntityPersistedEvent $event)
    {
        $this->callAction($event);
    }

    public function onPreUpdate(BeforeEntityUpdatedEvent $event)
    {
        $this->callAction($event);
    }


    public function setTranslationText(string $type, object $entity)
    {
        $content = [];
        $title = [];
        foreach ($this->languages as $language) {
            $index = $language . $type;
            $content[$language] = $this->requestStack->getCurrentRequest()->request->get($index)['content'];
            $title[$language] = $this->requestStack->getCurrentRequest()->request->get($index)['title'];
        }

        $json_content = json_encode($content);
        $json_title = json_encode($title);
        $entity->setContent($json_content);
        $entity->setTitle($json_title);
    }

    /**
     * @return void
     */
    private function callAction($event): void
    {
        $entity = $event->getEntityInstance();
        if (($entity instanceof FeedBack)) {
            $content = [];
            foreach ($this->languages as $language) {
                $index = $language . '_feedback_content';
                $content[$language] = $this->requestStack->getCurrentRequest()->request->get($index);
            }
            $json_content = json_encode($content);
            $entity->setContent($json_content);
            $entity->setUpdatedAt(new \DateTime());
        } else if (($entity instanceof Services)) {
            $this->setTranslationText('_services', $entity);
        } else if (($entity instanceof Experience)) {
            $this->setTranslationText('_experience', $entity);
        } else return;
    }
}
