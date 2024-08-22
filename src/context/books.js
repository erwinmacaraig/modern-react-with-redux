import { createContext, useState, useCallback } from "react";

const BooksContext = createContext();

function Provider({children}){
    const [books, setBooks] = useState([]);

       const fetchBooks = useCallback( async () => {
              const response = await fetch('http://localhost:3001/books', {
                     method: 'GET',
                     headers: {
                            'Content-Type': 'application/json'
                     }
              });
              const responseData = await response.json();
              setBooks(responseData);
       }, []);
       
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
        await fetch(`http://localhost:3001/books/${id}`, {
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
    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}
export { Provider };
export default BooksContext;
// import BooksContext, { Provider } from './whatever'
