import React, { useState ,useEffect} from "react";
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import { v4} from 'uuid'


function App() {
  const LOCAL_STG_KEY="contacts";
  const [contacts,setContacts]= useState([]);


  const addContactHandler = (contact) =>{
    setContacts([ { id: v4(), ...contact} , ...contacts]);

  };

  const removeContactHandler = (id) =>{
    const newContact =contacts.filter((contact) =>{
      return contact.id != id
    })
    
  setContacts(newContact);
  }

  useState(()=>{
    const recivedContacts=JSON.parse(localStorage.getItem(LOCAL_STG_KEY));
    if(recivedContacts)
    setContacts(recivedContacts);
  },[]);



  useEffect(()=>{
    localStorage.setItem(LOCAL_STG_KEY,JSON.stringify(contacts));
  },[contacts]);


  return (
    <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
      
      <ContactList 
      contacts={contacts} 
      getContactId={removeContactHandler}
      />
    </div>
  );
}

export default App;
