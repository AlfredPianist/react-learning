import css from "./Bookshelf.module.css";
import BookCard from "./BookCard";

const Bookshelf = ({ books, onUpdate, onDelete }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookCard
        key={book.id}
        book={book}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    );
  });

  return <div className={css.component}>{renderedBooks}</div>;
};

export default Bookshelf;
