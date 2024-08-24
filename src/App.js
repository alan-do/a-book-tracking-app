import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import BookDetailPage from './pages/BookDetail/BookDetailPage';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(setBooks);
  }, []);

  const updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks(prevBooks => {
        const updatedBooks = prevBooks.map(b => (b.id === book.id ? { ...b, shelf } : b));
        if (!updatedBooks.find(b => b.id === book.id)) {
          updatedBooks.push({ ...book, shelf });
        }
        return updatedBooks;
      });
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage books={books} onUpdateBookShelf={updateBookShelf} />} />
        <Route path="/search" element={<SearchPage books={books} onUpdateBookShelf={updateBookShelf} />} />
        <Route path="/book/:id" element={<BookDetailPage books={books} />} />
      </Routes>
    </div>
  );
}

export default App;