import { createSlice } from "@reduxjs/toolkit";
// import { selectContacts } from "./selectors";

import { fetchContacts } from "./contactsOps";

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
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
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
