import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://662aacb4d3f63c12f45861e5.mockapi.io";

const fetchContacts = createAsyncThunk(
  "contacts / fetchAll",
  // Використовуємо символ підкреслення як ім'я першого параметра,тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      toast.error("Failed to load contacts. Please try again later.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/add",

  async (newItem, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newItem);
      return response.data;
    } catch (error) {
      toast.error("Failed to add contact. Please try again.");

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${itemId}`);
      return response.data;
    } catch (error) {
      toast.error("Failed to delete contact. Please try again.");

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchContacts, addContact, deleteContact };
