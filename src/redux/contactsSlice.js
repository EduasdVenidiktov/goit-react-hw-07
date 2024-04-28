import { createSlice } from "@reduxjs/toolkit";
// import { selectContacts } from "./selectors";

import { fetchContacts, deleteContacts, addContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload; // те що прийшло з бекенду state.items.push(...action.payload)
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const deleteContactId = action.payload.id; //отримати id видаленого контакту
        //state.items-повертає об'єкт, а якщо замість поставити return, то повертає масив items[] і буде помилка
        state.items = state.items.filter((item) => item.id !== deleteContactId); // Оновk.'vj стан, видаливши контакт з id deletedContactId
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { fetchingInProgress, fetchingOk, fetchingError } =
//   contactsSlice.actions;

// export const selectContacts = (state) => state.contacts; //отримуємо списко контактів з Redux

// console.log(selectContacts);
// export default contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
export default contactsSlice;

//============================================================================================
// reducers: {
//   fetchingInProgress(state) {
//     state.loading = true;
//   },
//   fetchingOk(state, action) {
//     state.loading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   fetchingError(state, action) {
//     state.loading = false;
//     state.error = action.payload;
//   },
// },
