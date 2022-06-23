import React, { useState } from "react";
import AddContact from "./components/Contacts/AddContact";
import FilteredContent from "./components/Contacts/FilteredContent";
import Card from "./components/UI/Card";

const App = () => {
  const [phoneBook, setPhoneBook] = useState([]);

  const addPhoneBookHandler = (data) => {
    setPhoneBook((prevPhoneBook) => [...prevPhoneBook, data]);
  };

  return (
    <Card>
      <h1>Contacts</h1>
      <FilteredContent phoneBook={phoneBook} />
      <AddContact addPerson={addPhoneBookHandler} />
    </Card>
  );
};

export default App;
