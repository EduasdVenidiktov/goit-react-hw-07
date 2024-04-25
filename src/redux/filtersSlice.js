import { createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchContact: "",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.searchContact = action.payload;
    },
    changeFilter(state, action) {
      // Додаємо поле changeFilter
      state.searchContact = action.payload;
    },
  },
});

export const { setStatusFilter, changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => {
  const searchContact = state.filters.searchContact.toLowerCase();
  const contacts = selectContacts(state); // Використання селектора для отриманя списку контактів

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact)
  );
};

export default filtersSlice.reducer;
