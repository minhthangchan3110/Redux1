import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './contactsSlice.jsx';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phoneNumber }));
    setName('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default Form;