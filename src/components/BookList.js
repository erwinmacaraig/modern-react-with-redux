import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({books, onEdit, onDelete }){
    const {count, incrementCount } = useContext(BooksContext);
    const renderedBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    });

    return (
    <div className='book-list'>
        {count}
        <button type='button' onClick={incrementCount}>Increment Count</button>
        {renderedBooks}
    </div>);
}

export default BookList;