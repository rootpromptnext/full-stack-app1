import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <h1>Books CRUD App</h1>
      <BookForm onBookAdded={b => setBooks([...books, b])} />
      <BookList />
    </div>
  );
}

export default App;
