import React from 'react';
import { Link } from 'react-router-dom';

function Book({ book, onUpdateBookShelf }) {
  const handleChange = (event) => {
    onUpdateBookShelf(book, event.target.value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks?.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf || 'none'} onChange={handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          <Link to={`/book/${book.id}`}>{book.title}</Link>
        </div>
        <div className="book-authors">
          <Link to={`/book/${book.id}`}>{book.authors?.join(', ')}</Link>
        </div>
      </div>
    </li>
  );
}

export default Book;