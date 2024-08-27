import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';

function SearchPage({ books, onUpdateBookShelf }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const debounceSearch = useCallback((value) => {
    const handler = setTimeout(() => {
      if (value.trim()) {
        BooksAPI.search(value).then((results) => {
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
    }, 300); // 300ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [books]);

  useEffect(() => {
    return debounceSearch(query);
  }, [query, debounceSearch]);

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

SearchPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string
      }),
      shelf: PropTypes.string.isRequired
    })
  ).isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default SearchPage;