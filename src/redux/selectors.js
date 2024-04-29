import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts; //отримуємо списко контактів з Redux
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filters.searchContact;

// export const selectStatusFilter = (state) => state.contacts.filters.status;
// import { selectContacts, selectFilter } from "./selectors";

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
