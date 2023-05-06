import React from "react";
import './ContactCard.css';
import trash from '../img/icons8-trash-128.png'
import user from '../img/icons8-user-64.png'

const CardContact = (props) => {
  const {id, email, name } = props.contact;
  return (
    
    <div className="container">
      <img src={user} alt="trash" />
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <img src={trash} alt="trash"  onClick={() => props.clickHander(id)}/>
    </div>

  );
}

export default CardContact;