import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookShelf({ title, books, onUpdateBookShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <Link to={`/book/${book.id}`}>
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                      }}
                    ></div>
                  </Link>
                  <div className="book-shelf-changer">
                    <select
                      onChange={event => onUpdateBookShelf(book, event.target.value)}
                      value={book.shelf}
                    >
                      <option value="move" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <Link to={`/book/${book.id}`}>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.join(', ')}</div>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired
      }).isRequired,
      shelf: PropTypes.string.isRequired
    })
  ).isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default BookShelf;