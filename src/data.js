import { v4 as id } from "uuid";

// Two options for id: lodash's uniqueID and npm's uuid.

const books = [
  {
    id: id(),
    img: "https://picsum.photos/id/1/200",
    title: "San Agustín - Isnos",
    author: "Ramiro Rengifo Cano",
  },
  {
    id: id(),
    img: "https://picsum.photos/id/2/200",
    title: "¡Basta de historias!",
    author: "Andrés Oppenheimer",
  },
  {
    id: id(),
    img: "https://picsum.photos/id/3/200",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
  },
];

export default books;
