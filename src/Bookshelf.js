import css from "./Bookshelf.module.css";
import BookCard from "./BookCard";

const Bookshelf = ({ books }) => {
  const renderedBooks = books.map((book) => {
    return <BookCard key={book.id} {...book} />;
  });

  return <div className={css.component}>{renderedBooks}</div>;
};

export default Bookshelf;
