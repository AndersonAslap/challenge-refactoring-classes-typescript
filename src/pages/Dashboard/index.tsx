import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { Food } from '../../components/Food';
import { ModalAddFood } from '../../components/ModalAddFood';
//import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

interface FoodProps {
    id: number;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string;
}

export function Dashboard() {

    const [editingFood, setEditingFood] = useState<FoodProps>();
    const [foods, setFoods] = useState<FoodProps[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
   
    useEffect(() => {
        async function loadFoods() {
            const response = await api.get('/foods');
            setFoods(response.data);
        }

        loadFoods();
    }, [])

    async function handleAddFood(food: FoodProps) {
        try {
            const response = await api.post('/foods', food);

            setFoods([...foods, response.data])
      
        } catch (err) {
            console.log(err);
        }
    }

    async function handleDeleteFood(id : number) {
        await api.delete(`/foods/${id}`);
        const foodsFiltered = foods.filter(food => food.id !== id);
        setFoods(foodsFiltered);
    }

    function toggleModal() {
        setModalOpen(!modalOpen);
    }

    function toggleEditModal() {
        setEditModalOpen(!editModalOpen);
    }

    function handleEditFood(food: FoodProps) {
        setEditingFood(food);
        setEditModalOpen(true);
    }

    console.log(modalOpen)

    return (
        <>
          <Header openModal={toggleModal} />
          
          <ModalAddFood
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          handleAddFood={handleAddFood}
          />
  
          <FoodsContainer data-testid="foods-list">
            {foods &&
              foods.map(food => (
                <Food
                  key={food.id}
                  food={food}
                  handleDelete={handleDeleteFood}
                  handleEditFood={handleEditFood}
                />
              ))}
          </FoodsContainer>
        </>
    );

}