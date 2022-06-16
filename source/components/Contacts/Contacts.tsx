import React from 'react';
import ContactPopup from './ContactPopup';

const Contacts = ({ contacts }) => (
  <div className="d-flex">
    {contacts.map((contact) => (
      <ContactPopup key={contact.type} contact={contact} />
    ))}
  </div>
);

export default Contacts;
