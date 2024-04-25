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

//===========================================

import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const searchContact = useSelector((state) => state.filters.statusFilter);
  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(setStatusFilter(value));
  };

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search contacts"
        value={searchContact}
        onChange={handleInputChange}
      />
    </div>
  );
}
