import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from '../components/BookShelf';

function MainPage({ books, onUpdateBookShelf }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          title="Currently Reading"
          books={books.filter(book => book.shelf === 'currentlyReading')}
          onUpdateBookShelf={onUpdateBookShelf}
        />
        <BookShelf
          title="Want to Read"
          books={books.filter(book => book.shelf === 'wantToRead')}
          onUpdateBookShelf={onUpdateBookShelf}
        />
        <BookShelf
          title="Read"
          books={books.filter(book => book.shelf === 'read')}
          onUpdateBookShelf={onUpdateBookShelf}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

MainPage.propTypes = {
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

export default MainPage;