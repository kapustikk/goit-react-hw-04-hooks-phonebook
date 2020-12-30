import { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';
import ContactForm from './components/PhonebookHooks/ContactForm';
import ContactList from './components/PhonebookHooks/ContactList';
import Filter from './components/PhonebookHooks/Filter';

const allContacts = [];

export default function App() {
  const [contacts, setContacts] = useState(allContacts);
  const [filter, setFilter] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);

      if (parsedContacts) {
        setContacts(parsedContacts);
      }
      firstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contactId = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts([contactId, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </>
  );
}
