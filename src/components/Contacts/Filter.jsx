import React, { useState } from "react";

import styles from "./Filter.module.css";
const Filter = (props) => {
  const [filteredName, setFilteredName] = useState("");

  const enterFilterHandler = (e) => {
    setFilteredName(e.target.value);
  };
  props.setFilter(filteredName);
  return (
    <input
      className={styles.filter}
      type="text"
      placeholder="Filter By Name"
      value={filteredName}
      onChange={enterFilterHandler}
    />
  );
};

export default Filter;
