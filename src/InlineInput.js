import React, { useState } from "react";

const InlineInput = ({ type, name, value: initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (isEditing) {
      onChange(value);
    }
    setValue(value);
    setIsEditing(!isEditing);
  };

  let element = null;
  if (!isEditing) {
    element = value;
  } else {
    element = (
      <input type={type} value={value} name={name} onChange={handleChange} />
    );
  }

  return (
    <>
      {element}
      <button name="editTitle" onClick={handleClick}>
        Edit
      </button>
    </>
  );
};

export default InlineInput;
