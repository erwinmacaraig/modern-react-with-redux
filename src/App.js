// when we are importing folders of files out of the node modules directory
// we do not have to use a relative path

// import 'bulma/css/bulma.css';
import './App.css'; 
import PDA from './pages/PDA';
import Animals from './pages/Animals';
import Search from './pages/Search';
//==========================

import {useState, useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate'; 
import BookList from './components/BookList';
import BooksContext from './context/books';

function App(){
       
       const {fetchBooks} = useContext(BooksContext);
       useEffect(() => {
              fetchBooks();
       }, [])
       

       return (
              <div className='app'>
                     <h1>Reading List</h1>
                     <BookList />
                     <BookCreate />
              </div>
       );
}

export default App;