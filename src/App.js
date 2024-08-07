// when we are importing folders of files out of the node modules directory
// we do not have to use a relative path

// import 'bulma/css/bulma.css';
import './App.css'; 
import PDA from './pages/PDA';
import Animals from './pages/Animals';
import Search from './pages/Search';
//==========================

import {useState } from 'react';
import BookCreate from './components/BookCreate'; 
import BookList from './components/BookList';

function App(){
       const [books, setBooks] = useState([]);
       const createBook = (title) => {
              const updatedBooks = [
                     ...books,
                     {id: Math.round(Math.random() * 999), title}
              ];       
              setBooks(updatedBooks);
       }

       const editBookById = (id, newTitle) => {
              const updatedBooks = books.map((book) => {
                     if (book.id === id) {
                            return {...book, title: newTitle};
                     }
                     return book;
              });
              setBooks(updatedBooks);
       };

       const deleteBookById = (id) => {
              const updatedBooks = books.filter((book) => {
                     return book.id !== id;
              });
              setBooks(updatedBooks);
       };

       return (
              <div className='app'>
                     <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
                     <BookCreate onCreate={createBook}/>
              </div>
       );
}

export default App;