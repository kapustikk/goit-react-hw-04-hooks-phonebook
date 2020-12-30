import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './phonebook.module.css';

export default function ContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const phonebookMatching = () => {
    const nameMatch = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );

    const numberMatch = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );

    if (nameMatch.includes(name) || numberMatch.includes(number)) {
      alert(`${name} or ${number} is already in contacts`);
      return true;
    }
    if (name === '' || number === '') {
      alert('Please enter full number or name');
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');

    if (phonebookMatching()) {
      return;
    }
    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          className={s.input}
        ></input>
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          className={s.input}
        ></input>
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
