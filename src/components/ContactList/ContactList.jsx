import { useState } from "react";
import Contact from "./Contact"; // предполагается, что у вас есть компонент Contact
import css from "./ContactList.module.css";

const ContactsList = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Фильтрация контактов по имени
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contact..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;

//====================================================

// import { useSelector } from "react-redux";
// import css from "./ContactList.module.css";
// import Contact from "../Contact/Contact";
// // import { selectContacts } from "../../redux/contactsSlice";
// import { selectVisibleContacts } from "../../redux/selectors";

// export default function ContactList() {
//   const filteredContacts = useSelector(selectVisibleContacts); //отримав список контактів з contactsSlice(з Redux)

//   return (
//     <div>
//       <ul className={css.contactList}>
//         {filteredContacts.map((contact) => (
//           <li key={contact.id}>
//             <Contact data={contact} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
