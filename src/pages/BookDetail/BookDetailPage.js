import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../BookDetail/BookDetailPage.css';

function BookDetailPage({ books }) {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="book-detail">
        <Link to="/" className="back-link">Back</Link>
        <h1 className="book-title-detail" >{book.title}</h1>
        <p className="book-description">{book.description}</p>
        <p><strong>Author:</strong> {book.authors.join(', ')}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Publication Date:</strong> {book.publishedDate}</p>
        <p><strong>Page Count:</strong> {book.pageCount}</p>
        <img src={book.imageLinks.thumbnail} alt={book.title} className="book-thumbnail" />
      </div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
    </div>
  );
}

BookDetailPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      publisher: PropTypes.string,
      publishedDate: PropTypes.string,
      pageCount: PropTypes.number,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string
      })
    })
  ).isRequired
};

export default BookDetailPage;