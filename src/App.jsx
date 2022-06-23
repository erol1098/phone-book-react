import React, { useState } from "react";
import AddContact from "./components/Contacts/AddContact";
import Contents from "./components/Contacts/Contents";
import Filter from "./components/Contacts/Filter";
import Card from "./components/UI/Card";

const App = () => {
  const [phoneBook, setPhoneBook] = useState([]);
  const [filter, setFilter] = useState("");
  const addPhoneBookHandler = (data) => {
    setPhoneBook((prevPhoneBook) => [...prevPhoneBook, data]);
  };

  const filterHandler = (filter) => {
    setFilter(filter);
  };
  return (
    <Card>
      <Filter setFilter={filterHandler} />
      <Contents filteredName={filter} phoneBook={phoneBook} />
      <AddContact addPerson={addPhoneBookHandler} />
    </Card>
  );
};

export default App;
