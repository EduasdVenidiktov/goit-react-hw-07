import filtersReducer from "./filtersSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";

// Створюємо конфігурацію для persistReducer
const contactsPersistConfig = {
  key: "contacts",
  storage: storage,
  whitelist: ["contacts"], // Додаємо ключі, які ми хочемо зберегти
};

// Застосовуємо persistReducer до contactsReducer
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Використовуємо збережений контакт редуктор
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
