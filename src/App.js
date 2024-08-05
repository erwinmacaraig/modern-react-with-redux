// when we are importing folders of files out of the node modules directory
// we do not have to use a relative path
import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css'; 
import PDA from './pages/PDA';
import Animals from './pages/Animals';
//==========================
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';


function App(){
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );    
}

export default App;