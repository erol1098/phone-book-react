import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddContact.module.css";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const getNameHandler = (e) => setName(e.target.value);
  const getTelHandler = (e) => setTel(e.target.value);
  const saveDataHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "" || tel.trim() === "") return;

    props.addPerson({ name: name, tel: tel });
    setName("");
    setTel("");
  };

  return (
    <form className={styles.form} onSubmit={saveDataHandler}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={getNameHandler}
      />
      <input
        type={"tel"}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="Phone Number e.g 444-555-6789"
        value={tel}
        onChange={getTelHandler}
      />
      <Button />
    </form>
  );
};

export default AddContact;
