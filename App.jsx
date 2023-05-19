import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './components/contactsSlice';
import Form from './components/Form';
import List from './components/List';
import FavoritesList from './FavoritesList';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <List />
        <FavoritesList />
      </div>
    </Provider>
  );
};

export default App;
