import React from 'react';
import { useSelector } from 'react-redux';

const FavoritesList = () => {
  const favorites = useSelector((state) => state.contacts.favorites);

  return (
    <ul>
      {favorites.map((contact) => (
        <li key={contact.id}>{contact.phoneNumber}</li>
      ))}
    </ul>
  );
};

export default FavoritesList;