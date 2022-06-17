import React from 'react';
import Contact from './Popups/Contact';

const Contacts = ({ contacts }) => (
  <div className="d-flex">
    {contacts.map((contact) => (
      <Contact key={contact.type} contact={contact} />
    ))}
  </div>
);

export default Contacts;
