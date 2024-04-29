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
import Contact from "./components/Contact/Contact";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const dispatch = useDispatch();
  const contactsState = useSelector(selectContacts); // зберігаємо весь стан контактів
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error, items } = contactsState; // деструктуруємо потрібні дані зі стану

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Contact id={item.id} name={item.name} number={item.number} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// JSON.stringify(items, null, 2)

/* <ul>
          {items.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul> */
