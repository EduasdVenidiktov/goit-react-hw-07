import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectContactsState } from "./redux/selectors";
import ContactForm from "./components/ContactForm/ContactForm";

import css from "./App.module.css";
import ContactsList from "./components/ContactList/ContactList";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [searchContact, setSearchContact] = useState("");

  const handleSearchChange = (value) => {
    setSearchContact(value);
  };

  const dispatch = useDispatch();
  const contactsState = useSelector(selectContactsState);
  useEffect(() => {
    dispatch(fetchContacts()).catch(() => {
      toast.error("Failed to load contacts. Please try again later.");
    });
  }, [dispatch]);

  const { isLoading } = contactsState;

  return (
    <div className={css.container}>
      <header>
        <h1 className={css.title}>Phonebook</h1>
      </header>
      <ContactForm contacts={contactsState} />
      {isLoading ? <Loader /> : null}
      <ContactsList
        searchContact={searchContact}
        onSearchChange={handleSearchChange}
      />
      <Toaster position="top-center" />{" "}
    </div>
  );
}
