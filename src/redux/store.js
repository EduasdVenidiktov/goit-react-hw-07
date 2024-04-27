import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
// import { fetchContacts } from "./contactsOps";

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Первісний редуктор для контактів
    // filters: filtersReducer,
  },
});

// store.dispatch(fetchContacts());

export default store;
