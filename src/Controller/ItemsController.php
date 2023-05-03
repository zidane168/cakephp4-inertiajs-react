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

        $this->set(compact('items'));
    }
 
}
