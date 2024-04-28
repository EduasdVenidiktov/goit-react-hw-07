import axios from "axios";
// import { fetchingError, fetchingInProgress, fetchingOk } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://662aacb4d3f63c12f45861e5.mockapi.io";

const fetchContacts = createAsyncThunk(
  "contacts / fetchAll",
  // Використовуємо символ підкреслення як ім'я першого параметра,тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    console.log(thunkAPI);
    try {
      const response = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (ev) {
      // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(ev.message);
    }
  }
);

console.dir(fetchContacts);
console.log(fetchContacts.fulfilled.type);

const deleteContacts = createAsyncThunk(
  "contacts/delete",
  async (itemId, thunkAPI) => {
    console.log(itemId);

    try {
      const response = await axios.delete(`/contacts/${itemId}`);
      return response.data;
    } catch (ev) {
      return thunkAPI.rejectWithValue(ev.message);
    }
  }
);

const addContacts = createAsyncThunk(
  "contacts/add",

  //перевірити замість contact иає бути об'єкт нового контакту
  async (newItem, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newItem);
      return response.data;
    } catch (ev) {
      return thunkAPI.rejectWithValue(ev.message);
    }
  }
);

export { fetchContacts, addContacts, deleteContacts };

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchingInProgress());
//   try {
//     const response = await axios.get("/contacts");
//     dispatch(fetchingOk(response.data));
//     console.dir(fetchContacts);
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };
