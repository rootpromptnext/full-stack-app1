import React, { useState } from 'react';
import { createBook } from '../services/bookService';

function BookForm({ onBookAdded }) {
  const [book, setBook] = useState({ title: "", author: "", year: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(book).then(res => {
      onBookAdded(res.data);
      setBook({ title: "", author: "", year: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={book.title}
             onChange={e => setBook({ ...book, title: e.target.value })} />
      <input placeholder="Author" value={book.author}
             onChange={e => setBook({ ...book, author: e.target.value })} />
      <input placeholder="Year" value={book.year}
             onChange={e => setBook({ ...book, year: e.target.value })} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
