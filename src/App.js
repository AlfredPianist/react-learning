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

    // What was this?
    // setBooks((previousBooks) => {
    //   return [...previousB  books, newBook]
    // })
  };

  const handleUpdateBook = (newBook) => {
    const index = books.findIndex((book) => book.id === newBook.id);
    if (index < 0) return;
    const nextBooks = [...books];
    nextBooks[index] = newBook;
    setBooks(nextBooks);
  };

  const handleDeleteBook = (queryBook) => {
    const nextBooks = books.filter((book) => book.id !== queryBook.id);
    setBooks(nextBooks);
  };

  return (
    <div className={css.component}>
      <input type="text" onChange={handleSearchBook} value={query} />
      <AddBookForm onAdd={handleAddBook} />
      <Bookshelf
        books={activeBooks}
        onUpdate={handleUpdateBook}
        onDelete={handleDeleteBook}
      />
    </div>
  );
};

export default App;
