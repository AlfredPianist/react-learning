import React, { useMemo, useState } from "react";
import css from "./App.module.css";
import AddBookForm from "./AddBookForm";
import Bookshelf from "./Bookshelf";
import books from "./data";

// Conditional rendering: {truthy_condition && content}

const booksInitial = books;

const App = () => {
  const [books, setBooks] = useState(booksInitial);
  const [query, setQuery] = useState("");

  // Derivative state - search books.
  // useMemo - Memoization, generally used with maps or filters.
  //           List of dependencies in array
  const activeBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
  }, [books, query]);

  const handleSearchBook = (event) => {
    setQuery(event.target.value);
  };

  const handleAddBook = (newBook) => {
    const nextBooks = [...books, newBook];
    setBooks(nextBooks);
  };

  const updateBook = (newBook) => {
    const index = books.findIndex((book) => book.id === newBook.id);
    if (index < 0) return;
    const nextBooks = [...booksInitial];
    nextBooks[index] = newBook;
    setBooks(nextBooks);
  };

  const deleteBook = (queryBook) => {
    const index = booksInitial.findIndex(
      (book) => book.name === queryBook.name
    );
    if (index >= 0) {
      const nextBooks = booksInitial.filter(
        (book) => book.name !== queryBook.name
      );
      setBooks(nextBooks);
    }
  };

  return (
    <div className={css.component}>
      <input type="text" onChange={handleSearchBook} value={query} />
      <AddBookForm onAdd={handleAddBook} />

      <Bookshelf books={activeBooks} onUpdate={updateBook} />
    </div>
  );
};

export default App;
