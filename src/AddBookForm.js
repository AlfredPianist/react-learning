import css from "./AddBookForm.module.css";
import { v4 as id } from "uuid";
import React, { useState } from "react";

const AddBookForm = ({ onAdd }) => {
  const [values, setValues] = useState({ title: "", author: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: id(),
      img: "https://picsum.photos/200",
      title: values.title,
      author: values.author,
    };
    onAdd(newBook);
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className={css.name}
        value={values.title}
        onChange={handleChange("title")}
        type="text"
      />
      <input
        className={css.author}
        value={values.author}
        onChange={handleChange("author")}
        type="text"
      />
      <pre>{JSON.stringify(values, null, 4)}</pre>
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBookForm;
