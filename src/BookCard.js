import css from "./BookCard.module.css";
import { useState } from "react";
import InlineInput from "./InlineInput";

const BookCard = (book) => {
  const { id, img, title, author, onUpdate } = book;
  const [isEditing, setIsEditing] = useState({
    editTitle: false,
    editAuthor: false,
  });
  const [field, setField] = useState({
    title: title,
    author: author,
  });

  const handleClick = (event) => {
    setIsEditing({
      ...isEditing,
      [event.target.name]: !isEditing[event.target.name],
    });
    if (isEditing[event.target.name] === true) {
      const newField = event.target.name.match(/[A-Z].*$/)[0].toLowerCase();
      book = {
        ...book,
        [newField]: field[newField],
      };
    }
  };
  const handleChange = (event) => {
    setField({
      ...field,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={css.component}>
      <img className={css.img} alt={title + " book cover"} src={img} />
      <ul className={css.info}>
        <li className={css.id}>{id}</li>
        <li className={css.title}>
          <InlineInput
            type="text"
            name="title"
            value={field.title}
            isEditing={isEditing["editTitle"]}
            onChange={handleChange}
          />
          <button name="editTitle" onClick={handleClick}>
            Edit
          </button>
        </li>
        <li className={css.author}>
          <InlineInput
            type="text"
            name="author"
            value={field.author}
            isEditing={isEditing["editAuthor"]}
            onChange={handleChange}
          />
          <button name="editAuthor" onClick={handleClick}>
            Edit
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BookCard;
