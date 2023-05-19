import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const contacts = useSelector((state) => state.contacts.list);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name} - {contact.phoneNumber}</li>
      ))}
    </ul>
  );
};

export default List;