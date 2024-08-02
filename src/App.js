// when we are importing folders of files out of the node modules directory
// we do not have to use a relative path
import 'bulma/css/bulma.css';
import './App.css'; 
import PDA from './pages/PDA';
//==========================
import AnimalShow from './AnimalShow';
import {useState} from 'react';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}
function App(){
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

export default App;