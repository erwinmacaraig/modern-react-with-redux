// when we are importing folders of files out of the node modules directory
// we do not have to use a relative path

// import 'bulma/css/bulma.css';
import './App.css'; 
import PDA from './pages/PDA';
import Animals from './pages/Animals';
import Search from './pages/Search';
//==========================

import {useState, useEffect } from 'react';
import BookCreate from './components/BookCreate'; 
import BookList from './components/BookList';

function App(){
       const [books, setBooks] = useState([]);

       const fetchBooks = async () => {
              const response = await fetch('http://localhost:3001/books', {
                     method: 'GET',
                     headers: {
                            'Content-Type': 'application/json'
                     }
              });
              const responseData = await response.json();
              setBooks(responseData);
       };

       useEffect(() => {
              fetchBooks();
       }, [])
       const createBook = async (title) => {
              const response = await fetch('http://localhost:3001/books', {
                     method: 'POST',
                     headers: {
                            'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({title: title})
              });
              const responseData = await response.json();

              const updatedBooks = [
                     ...books,
                     responseData
              ];       
              setBooks(updatedBooks);
       }

       const editBookById = async (id, newTitle) => {
              let response = await fetch('http://localhost:3001/books/' + id, {
                     method: 'PUT',
                     headers: {
                            'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({title: newTitle})
              });
              let data = await response.json();
              console.log(data);
              const updatedBooks = books.map((book) => {
                     if (book.id === id) {
                            return {...book, ...data};
                     }
                     return book;
              });
              setBooks(updatedBooks);
       };

       const deleteBookById = async (id) => {
              let response = await fetch(`http://localhost:3001/books/${id}`, {
                     method: 'DELETE',
                     headers: {
                            'Content-Type': 'application/json'
                     }
              });
              const updatedBooks = books.filter((book) => {
                     return book.id !== id;
              });
              setBooks(updatedBooks);
       };

       return (
              <div className='app'>
                     <h1>Reading List</h1>
                     <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
                     <BookCreate onCreate={createBook}/>
              </div>
       );
}

export default App;