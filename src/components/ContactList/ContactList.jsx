import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
// import { selectContacts } from "../../redux/contactsSlice";
import { selectVisibleContacts } from "../../redux/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectVisibleContacts); //отримав список контактів з contactsSlice(з Redux)

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
