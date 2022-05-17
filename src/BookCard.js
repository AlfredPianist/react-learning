import css from "./BookCard.module.css";
import InlineInput from "./InlineInput";

const BookCard = (props) => {
  const { book, onUpdate, onDelete } = props;
  const { id, title, author, img } = book;

  const handleDelete = () => {
    onDelete(book);
  };

  const handleChange = (name) => (nextValue) => {
    const nextBook = {
      ...book,
      [name]: nextValue,
    };
    onUpdate(nextBook);
  };

  return (
    <div className={css.component}>
      <img className={css.img} alt={title + " book cover"} src={img} />
      <button onClick={handleDelete}>Delete</button>
      <ul className={css.info}>
        <li className={css.id}>{id}</li>
        <li className={css.title}>
          <InlineInput
            type="text"
            name="title"
            value={title}
            onChange={handleChange("title")}
          />
        </li>
        <li className={css.author}>
          <InlineInput
            type="text"
            name="author"
            value={author}
            onChange={handleChange("author")}
          />
        </li>
      </ul>
    </div>
  );
};

export default BookCard;
