# MyReads: A Book Tracking App

This project is a book tracking application that allows users to categorize books they have read, are currently reading, or want to read.

## Getting Started

To run this application on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the necessary dependencies by running:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your web browser and visit `http://localhost:3000` to view the app.

## Features

- View books categorized by "Currently Reading", "Want to Read", and "Read" shelves.
- Move books between shelves.
- Search for new books and add them to your shelves.
- View detailed information about each book.

## API

This project uses the BooksAPI provided by Udacity. The API methods are located in `src/BooksAPI.js` and include:

- `getAll()`: Retrieves all books from the server.
- `update(book, shelf)`: Updates the shelf of a specific book.
- `search(query, maxResults)`: Searches for books based on a query string.
- `get(bookId)`: Retrieves detailed information about a specific book.

## Project Structure

- `src/App.js`: The main component that handles routing and state management.
- `src/components/`: Contains all the React components used in the application.
- `src/BooksAPI.js`: Contains the methods for interacting with the backend API.

## Dependencies

This project was built using:

- React
- React Router
- PropTypes

To install all dependencies, run `npm install` in the project directory.
