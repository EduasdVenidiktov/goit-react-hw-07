import { useState } from "react";
import { useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import Contact from "../Contact/Contact";

const SearchBox = () => {
  const [searchContact, setSearchContact] = useState("");
  const contacts = useSelector((state) => state.contacts.items); // отримуємо всі контакти зі стану Redux

  const handleInputChange = (ev) => {
    const { value } = ev.target;
    setSearchContact(value);
  };

  // Фільтруємо контакти за іменем та номером телефону
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchContact.toLowerCase()) ||
      contact.number.includes(searchContact)
  );

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.inputArea}
        type="text"
        value={searchContact}
        onChange={handleInputChange}
        placeholder="Input name or phon number"
      />

      {/* Відобрадаємо відфільтровані контакти */}
      <ul>
        {filteredContacts.map((item) => (
          <li key={item.id}>
            <Contact id={item.id} name={item.name} number={item.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
//=========================================================
// працювало без помилок, але ж не корректно
// import { useDispatch, useSelector } from "react-redux";
// import { setStatusFilter } from "../../redux/filtersSlice";
// import css from "./SearchBox.module.css";

// export default function SearchBox() {
//   const dispatch = useDispatch();

//   const searchContact = useSelector((state) => state.filters.statusFilter);
//   const handleInputChange = (ev) => {
//     const value = ev.target.value;
//     dispatch(setStatusFilter(value));
//   };

//   return (
//     <div>
//       <p className={css.label}>Find contacts by name</p>
//       <input
//         type="text"
//         placeholder="Search contacts"
//         value={searchContact}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// }

//===============================================================================================
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setStatusFilter } from "../../redux/filtersSlice";
// import css from "./SearchBox.module.css";

// export default function SearchBox() {
//   const dispatch = useDispatch();

//   // Локальное состояние для хранения введенного текста поиска
//   const [searchTerm, setSearchTerm] = useState("");

//   // Получаем список всех контактов из Redux store
//   const allContacts = useSelector((state) => state.contacts.contacts);

//   console.log(allContacts);

//   // Фильтруем контакты на основе введенного поискового запроса
//   const filteredContacts = allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Обработчик изменения ввода
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value); // Обновляем локальное состояние
//     dispatch(setStatusFilter(value)); // Отправляем значение в Redux store
//   };

//   return (
//     <div>
//       <p className={css.label}>Find contacts by name</p>
//       <input
//         type="text"
//         placeholder="Search contacts"
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       {/* Отображаем карточки контактов, соответствующие введенному поисковому запросу */}
//       <div className={css.contactsContainer}>
//         {filteredContacts.map((contact) => (
//           <div key={contact.id} className={css.contactCard}>
//             <h3>{contact.name}</h3>
//             <p>{contact.email}</p>
//             {/* Добавьте другие поля контакта, которые вы хотите отобразить */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
