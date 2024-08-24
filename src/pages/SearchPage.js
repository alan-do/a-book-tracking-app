import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';

function SearchPage({ books, onUpdateBookShelf }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query.trim()) {
      BooksAPI.search(query).then((results) => {
        if (results.error) {
          setSearchResults([]);
        } else {
          setSearchResults(results.map(result => {
            const bookInShelf = books.find(b => b.id === result.id);
            return bookInShelf ? { ...result, shelf: bookInShelf.shelf } : { ...result, shelf: 'none' };
          }));
        }
      });
    } else {
      setSearchResults([]);
    }
  }, [query, books]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map(book => (
            <Book key={book.id} book={book} onUpdateBookShelf={onUpdateBookShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;