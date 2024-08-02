// when we are importing folders of files out of the node modules directory
// we do not have to use a relative path
import 'bulma/css/bulma.css';
import './App.css'; 
import PDA from './pages/PDA';
import Animals from './pages/Animals';
//==========================
import AnimalShow from './components/AnimalShow';
import {useState} from 'react';


function App(){
    return <Animals />
}

export default App;