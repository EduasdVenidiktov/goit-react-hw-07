import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import Contact from "./components/Contact/Contact";
import {
  // addContacts,
  // deleteContacts,
  fetchContacts,
} from "./redux/contactsOps";
import { selectContacts } from "./redux/selectors";
import ContactForm from "./components/ContactForm/ContactForm";
// import Contact from "./components/Contact/Contact";
import SearchBox from "./components/SearchBox/SearchBox";

import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const contactsState = useSelector(selectContacts); // зберігаємо весь стан контактів
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error } = contactsState; // деструктуруємо потрібні дані зі стану
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div className={css.container}>
      <header>
        <h1 className={css.title}>Phonebook</h1>
      </header>

      <ContactForm contacts={contacts} />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

// JSON.stringify(items, null, 2)

/* <ul>
          {items.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul> */
