import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    favorites: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    removeContact: (state, action) => {
      state.list = state.list.filter((contact) => contact.id !== action.payload);
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
  },
});

export const { addContact, removeContact, addToFavorites } = contactsSlice.actions;
export default contactsSlice.reducer;