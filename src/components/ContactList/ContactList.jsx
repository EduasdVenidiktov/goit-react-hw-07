import Contact from "../Contact/Contact";
import SearchBox from "../SearchBox/SearchBox";
import css from "./ContactList.module.css";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactsList = ({ searchContact, onSearchChange }) => {
  const filteredContacts = useSelector((state) =>
    selectFilteredContacts(state, searchContact)
  );

  // Перевіряємо, чи є контакти після фільтрування, та не введений пустий запит, то показуємо помилку
  if (filteredContacts.length === 0 && searchContact.trim() !== "") {
    toast.error("Sorry, there's no such contact. Please try again!");
  }

  return (
    <div>
      <SearchBox value={searchContact} onChange={onSearchChange} />

      <ul className={css.contactList}>
        {filteredContacts.map((item) => (
          <li key={item.id}>
            <Contact
              id={item.id}
              name={item.name}
              country={item.country}
              number={item.number}
              mail={item.mail}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
