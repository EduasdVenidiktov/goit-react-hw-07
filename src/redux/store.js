import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
// import { fetchContacts } from "./contactsOps";

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Первісний редуктор для контактів
    filters: filtersReducer,
  },
});

export default store;
