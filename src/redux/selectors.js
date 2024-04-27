export const selectContacts = (state) => state.contacts; //отримуємо списко контактів з Redux
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectStatusFilter = (state) => state.contacts.filters.status;
