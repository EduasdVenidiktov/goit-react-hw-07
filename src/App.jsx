import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectContactsState } from "./redux/selectors";
import ContactForm from "./components/ContactForm/ContactForm";

import css from "./App.module.css";
import ContactsList from "./components/ContactList/ContactList";
import Loader from "./components/Loader/Loader";
import { ShowErrorMessage } from "./components/Error/Error";

export default function App() {
  const dispatch = useDispatch();
  const contactsState = useSelector(selectContactsState); // зберігаємо весь стан контактів
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error } = contactsState; // деструктуруємо потрібні дані зі стану
  const contacts = useSelector(selectContactsState);

  return (
    <div className={css.container}>
      <header>
        <h1 className={css.title}>Phonebook</h1>
      </header>
      <ContactForm contacts={contacts} />
      {error && <ShowErrorMessage />}
      {isLoading ? <Loader /> : null}
      <ContactsList />
    </div>
  );
}
