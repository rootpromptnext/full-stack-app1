import React, { useState, useEffect } from 'react';
import { getBooks, createBook, updateBook, deleteBook } from './services/bookService';

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: '', author: '', year: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateBook(editingId, form).then(res => {
        setBooks(books.map(b => b.id === editingId ? res.data : b));
        setForm({ title: '', author: '', year: '' });
        setEditingId(null);
      });
    } else {
      createBook(form).then(res => {
        setBooks([...books, res.data]);
        setForm({ title: '', author: '', year: '' });
      });
    }
  };

  const handleEdit = (book) => {
    setForm({ title: book.title, author: book.author, year: book.year });
    setEditingId(book.id);
  };

  const handleDelete = (id) => {
    deleteBook(id).then(() => {
      setBooks(books.filter(b => b.id !== id));
    });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Books CRUD App</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          {editingId ? "Update Book" : "Add Book"}
        </button>
        {editingId && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setForm({ title: '', author: '', year: '' });
              setEditingId(null);
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <h2>Books</h2>
      <ul className="list-group">
        {books.map(book => (
          <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{book.title} by {book.author} ({book.year})</span>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(book)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
