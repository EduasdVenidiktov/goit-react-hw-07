import { createSelector } from "@reduxjs/toolkit";

export const selectContactsState = (state) => state.contacts; //отримуємо списко контактів з Redux

export const selectIsLoading = (state) => selectContactsState(state).isLoading;
export const selectError = (state) => selectContactsState(state).error;

// Складний селектор для отримання значення фільтру зі стану Redux
export const selectFilterContact = (state) => state.filters.searchContact;

//=========== Складні селектори =======================================================
// Складний селектор для отримання списку контактів зі стану Redux
export const selectContacts = (state) => selectContactsState(state).items;

// Селектор для отримання довжини списку контактів
export const selectContactsCount = createSelector(
  selectContacts,
  (contacts) => contacts.length
);

export default selectContactsCount;

// // Створення та експорт мемоізованого селектора selectFilteredContacts
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilterContact],
//   (contacts, filter) => {
//     // Функція для фільтрації контактів
//     return contacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.number.includes(filter)
//     );
//   }
// );

//===================================================================================================

// import { createSelector } from "@reduxjs/toolkit";

// export const selectContactsState = (state) => state.contacts; //отримуємо списко контактів з Redux

// export const selectIsLoading = (state) => selectContactsState(state).isLoading;
// export const selectError = (state) => selectContactsState(state).error;

// export const selectFilterContact = (state) => state.filters.searchContact;

// //=========== Складні селектори =======================================================
// // Складний селектор для отримання списку контактів зі стану Redux
// const selectContacts = (state) => selectContactsState(state).items;

// // Селектор для отримання довжини списку контактів
// const selectContactsCount = createSelector(
//   selectContacts,
//   (contacts) => contacts.length
// );

// export default selectContactsCount;

// // Створення та експорт мемоізованого селектора selectFilteredContacts
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilterContact],
//   (contacts, filter) => {
//     // Функція для фільтрації контактів
//     return contacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.number.includes(filter)
//     );
//   }
// );
