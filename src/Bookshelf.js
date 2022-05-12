import "./Bookshelf.css";
import BookCard from "./BookCard";

const Bookshelf = () => {
  const books = [
    {
      img: "https://picsum.photos/200",
      title: "San Agustín - Isnos",
      author: "Ramiro Rengifo Cano",
    },
    {
      img: "https://picsum.photos/200",
      title: "¡Basta de historias!",
      author: "Andrés Oppenheimer",
    },
    {
      img: "https://picsum.photos/200",
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
    },
  ];

  return (
    <div className="Bookshelf">
      {books.map((book, idx) => {
        return (
          <BookCard
            key={idx}
            img={book.img}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </div>
  );
};

export default Bookshelf;
