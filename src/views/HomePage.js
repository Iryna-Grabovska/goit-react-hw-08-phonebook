import React from 'react';
import { useState } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserAuth } from 'Hooks/userAuth.js';
import { removeUser } from 'store/userSlice';
import {
  useFetchContactsQuery,
  useCreateContactsMutation,
  useDeleteContactsMutation,
} from 'store/authApi';

function HomePage() {
  const dispatch = useDispatch();
  const { isAuth, email } = UserAuth();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data = [], isLoading } = useFetchContactsQuery();

  const [createContacts] = useCreateContactsMutation();
  const [deleteContact, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContacts({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  // const newContacts = () => {
  // const normalizedFilter = filterContact.toLowerCase();
  // return data.filter(contact =>
  // contact.name.toLowerCase().includes(normalizedFilter),
  // );
  // };

  const handleDeleteContacts = async id => {
    await deleteContact(id).unwrap();
  };

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        log out from {email}
      </button>
      <h2>Contacts</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          name
          <input type="name" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          number
          <input
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            // id={phoneInputId}
            type="number"
            name="number"
            value={number}
            // onChange={handleChange}
          />
        </label>
      </form>
      <ul>
        {data.map(({ id, name, phone }) => (
          //  {newContacts().map(({ id, name, phone }) => (
          <li>
            <span>{name} :</span>
            <span>{number} :</span>
            <button type="button" onClick={() => handleDeleteContacts(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <Routes>
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}
export default HomePage;
