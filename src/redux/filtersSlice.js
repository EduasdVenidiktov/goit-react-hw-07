import { createSlice } from "@reduxjs/toolkit";
// import { selectContacts } from "./contactsSlice";
import { filterContacts } from "./contactsOps";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchContact: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload; //те що прийшло з бекенду state.items.push(...action.payload)
      })
      .addCase(filterContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const filtersReducer = filtersSlice.reducers;
export default filtersSlice;
