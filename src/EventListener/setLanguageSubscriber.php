<?php

namespace App\EventListener;

use App\Entity\FeedBack;
use App\Entity\Services;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\EasyAdminEvents;
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
     * EasyAdminSubscriber constructor.
     * @param RequestStack $requestStack
     * @param EntityManagerInterface $manager
     */
    public function __construct(RequestStack $requestStack, EntityManagerInterface $manager)
    {
        $this->requestStack = $requestStack;
        $this->manager = $manager;
    }

    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents()
    {
        return [
            EasyAdminEvents::PRE_PERSIST => 'onPrePersist',
            EasyAdminEvents::PRE_UPDATE => 'onPrePersist',
        ];
    }

    public function onPrePersist(GenericEvent $event)
    {
        $entity = $event->getSubject();
        $languages = ['en', 'de', 'fr'];
        if (($entity instanceof FeedBack)) {
            $content = [];
            foreach ($languages as $language) {
                $index = $language . '_feedback_content';
                $content[$language] = $this->requestStack->getCurrentRequest()->request->get($index);
            }
            $json_content = json_encode($content);
            $entity->setContent($json_content);
            $entity->setUpdatedAt(new \DateTime());
        }else if (($entity instanceof Services)){
            $content = [];
            $title = [];
            foreach ($languages as $language) {
                $index = $language . '_services';
                $content[$language] = $this->requestStack->getCurrentRequest()->request->get($index)['content'];
                $title[$language] = $this->requestStack->getCurrentRequest()->request->get($index)['title'];
            }

            $json_content = json_encode($content);
            $json_title = json_encode($title);
            $entity->setContent($json_content);
            $entity->setTitle($json_title);
        }else return ;
    }
}