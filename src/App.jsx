import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

// import useContact from "../useContact.json";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "./redux/filtersSlice";
import { selectContacts } from "./redux/contactsSlice";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  useDispatch();
  // const contacts = useSelector((state) => state.contacts.items);
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectNameFilter);

  // Ефект для збереження стану в локальне сховище
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchTerm} onChange={setSearchTerm} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
