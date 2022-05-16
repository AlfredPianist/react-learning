import css from "./Bookshelf.module.css";
import BookCard from "./BookCard";

const Bookshelf = ({ books, onUpdate }) => {
  const renderedBooks = books.map((book) => {
    return <BookCard key={book.id} {...book} onUpdate={onUpdate} />;
  });

  return <div className={css.component}>{renderedBooks}</div>;
};

export default Bookshelf;
