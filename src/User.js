import React from "react";
import { useState } from "react";

export default function User() {
  const [firstName, setfirstName] = useState("Jane");
  const [lastName, setlastName] = useState("Jacobs");
  const [isEditing, setEditing] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEditing(!isEditing);
      }}
    >
      <label>First name : {isEditing ? <input /> : { firstName }}</label>
      <label>Last name : {isEditing ? <input /> : { lastName }}</label>
      <button type="submit"> {isEditing? 'Save ' : 'Edit ' }Profile</button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>

  );
}
