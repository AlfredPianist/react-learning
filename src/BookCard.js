import "./BookCard.css";

const BookCard = ({ img, title, author }) => {
  return (
    <div className="BookCard">
      <img className="BookCard__img" alt={title + " book cover"} src={img} />
      <ul className="BookCard__info">
        <li className="BookCard__title">{title}</li>
        <li className="BookCard__author">{author}</li>
      </ul>
    </div>
  );
};

export default BookCard;
