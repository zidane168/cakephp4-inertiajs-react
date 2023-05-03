<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Items Controller
 *
 * @method \App\Model\Entity\Item[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ItemsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $items = array_rand(range(1, 1000), 5);
        $this->Flash->success("Welcome to Items Index");
        $this->set(compact('items'));
    }
 

    public function red() {
        $this->Flash->success("Welcome to Items red");
        return $this->redirect(['action' => 'index']);
    }

    public function differentActionSameComponent() {
        $items = array_rand(range(1, 5000), 10);

        $this->Flash->error("This is a flash from the: " . $this->getRequest()->getParam('action')); // get function name // eg: This is a flash from the: differentActionSameComponent
        $this->set('component', 'Items/Index');
        $this->set('items', $items);
    }

    public function getNumber() {
        $this->set('getNumber', array_rand(range(1, 20000), 1));

        $this->viewBuilder()->setOption('serialize', 'getNumber');
    }

}
