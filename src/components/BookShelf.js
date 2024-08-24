import React from 'react';
import { Link } from 'react-router-dom';

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
                        Di chuyển đến...
                      </option>
                      <option value="currentlyReading">Đang đọc</option>
                      <option value="wantToRead">Muốn đọc</option>
                      <option value="read">Đã đọc</option>
                      <option value="none">Không có</option>
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

export default BookShelf;