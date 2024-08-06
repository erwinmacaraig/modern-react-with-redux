// when we are importing folders of files out of the node modules directory
// we do not have to use a relative path

import 'bulma/css/bulma.css';
import './App.css'; 
import PDA from './pages/PDA';
import Animals from './pages/Animals';
import Search from './pages/Search';
//==========================



function App(){
       return <Search />
}

export default App;