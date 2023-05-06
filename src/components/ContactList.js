import React from "react";
import ContactCard from './ContactCard'
const ContactList = (props) =>{
  const deleteContactListItem= (id) =>{
    props.getContactId(id);
  }
  const renderContactList = props.contacts.map((contact)=>{
    return (
      <div key={contact.id}>
  <ContactCard contact={contact} clickHander={deleteContactListItem} ></ContactCard>
       </div>
   
    );
  });
  return (
      renderContactList
  )
}

export default ContactList;