import React from "react";

const InlineInput = ({ type, name, value, isEditing, onChange }) =>
  if (!isEditing) {
    return value;
  }

  return <input type={type} value={value} name={name} onChange={onChange} />;
};

export default InlineInput;
