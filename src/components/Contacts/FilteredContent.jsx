import React, { useState } from "react";
import styles from "./FilteredContent.module.css";
const FilteredContent = (props) => {
  const [filteredName, setFilteredName] = useState("");

  const enterFilterHandler = (e) => {
    setFilteredName(e.target.value);
  };

  return (
    <>
      <input
        className={styles.filter}
        type="text"
        placeholder="Filter By Name"
        value={filteredName}
        onChange={enterFilterHandler}
      />
      <section className={styles.content}>
        <ul>
          {props.phoneBook
            .filter((person) =>
              person.name
                .toLocaleLowerCase()
                .startsWith(filteredName.toLocaleLowerCase())
            )
            .map((person) => {
              const { name, tel } = person;
              return (
                <li key={tel}>
                  <span>
                    {name.replace(name[0], name[0].toLocaleUpperCase())}
                  </span>
                  <span>{tel}</span>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default FilteredContent;
