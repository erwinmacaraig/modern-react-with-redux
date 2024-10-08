import { useState } from 'react';
import AnimalShow from '../components/AnimalShow';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

function Animals(){
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };
    return (
        <>
            <div className='app'>
                <button onClick={handleClick}>Add Animal</button>
                <div className='animal-list'>
                    {animals.map((animal, index) => {
                        return <AnimalShow type={animal} key={index} />
                    })}
                </div>            
            </div>            
        </>
    );
}
export default Animals;