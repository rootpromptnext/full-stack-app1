import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/bookService';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteBook(id).then(() => setBooks(books.filter(b => b.id !== id)));
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(b => (
          <li key={b.id}>
            {b.title} by {b.author} ({b.year})
            <button onClick={() => handleDelete(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
