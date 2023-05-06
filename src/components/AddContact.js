import React from "react";
import './AddContact.css'
class AddContact extends React.Component {
  state={
    name: "" ,
    email:""
};

addContact = (e)=>{
  e.preventDefault();
  if(this.state.name ===" " || this.state.email==="")
  {
    alert("All fields required")
    return
  }
  this.props.addContactHandler(this.state);
  this.setState({name:" ",email:" "});
  
}
  render(){
    return (
      <div className="Container">
        <h2>Add Contact</h2>
        <form onSubmit={this.addContact}>
          <div className="formdiv">
            <label>Name</label>
            <input type='text' name='name' placeholder="Name" value={this.state.name}
            onChange={ (e) => {
              this.setState({name: e.target.value})
            }}/>
          </div>
          <div className="formdiv">
            <label>Email</label>
            <input type='text' name='Email' placeholder="Email" value={this.state.email}
            onChange={ (e) => {
              this.setState({email: e.target.value})
            }}/>
          </div>
          <button>Add</button>
        </form>
      </div>
    )
  }
}
export default AddContact;