import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import Contact from "./components/Contact/Contact";
import { fetchContacts } from "./redux/contactsOps";
import { selectContacts } from "./redux/selectors";

export default function App() {
  const dispatch = useDispatch();
  const contactsState = useSelector(selectContacts); // зберігаємо весь стан контактів
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error, items } = contactsState; // деструктуруємо потрібні дані зі стану

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && JSON.stringify(items, null, 2)}
    </div>
  );
}

// JSON.stringify(items, null, 2)
{
  /* <ul>
          {items.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul> */
}
