import React from "react";
import styles from "./Content.module.css";

const Contents = (props) => {
  return (
    <section className={styles.content}>
      <h3>Phone Book</h3>
      <ul>
        {props.phoneBook
          .filter((person) => person.name.startsWith(props.filteredName))
          .map((person) => {
            const { name, tel } = person;
            return (
              <li key={tel}>
                <span>{name}</span>
                <span>{tel}</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Contents;
