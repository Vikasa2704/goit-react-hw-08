import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.filter; 
export const selectLoading = (state) => state.contacts.loading; 
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [ selectContacts, selectFilter],
   (contacts, filter) => {
     return contacts && filter
     ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
     : contacts;
   }
  );
