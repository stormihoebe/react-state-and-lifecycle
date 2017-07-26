import React from 'react';
import contacts from './contacts.json';


//Define how each individual elements will appear. You are passing in a single object from the JSON array of objects and creating a card for each person.
  function ListItem(props) {
    return <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <img src="props.image"/>
              <span className="card-title">{props.name}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{props.email}</p>
              <p>{props.phone}</p>
            </div>
          </div>
        </div>;
  }
  //Define a form that takes in a user input
  function NameSearch(props){
    return (
      <form onSubmit={this.onButtonClick}>
        <label>
          Search Name:
          <input type="text" value={this.state.value} onChange={this.onInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }


//Set the initial state of the component with an input value of '' and the contacts equal to the contacts from the contacts.json
//bind the functions that will impact the state
//define the functions that are implemented in the form as synthetic events.
//In onInputChange Event, set the state of inputValue to whatever has been typed in the input field
//in the OnButtonClick, set state of stateContacts to an array of contacts that has been filtered with the filteredContacts functions
//render the jsx
  class ContactList extends React.Component {
    constructor(props) {
      super();
      this.state = {
        inputValue: '',
        stateContacts: contacts
      }
      this.onInputChange = this.onInputChange.bind(this);
      this.onButtonClick = this.onButtonClick.bind(this);
    }
    onInputChange(e) {
      this.setState({
        inputValue: e.target.value,
      })
    }
    onButtonClick(e){
      e.preventDefault();
      const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase())> -1;
      });
      this.setState({
        stateContacts: filteredContacts
      });

    }
    render(){

      return (
        <div>
          <h3>Search My Contacts</h3>
            <form className="row" onSubmit={this.onButtonClick}>
              <label className="col m10">
                Contact Search:
                <input type="text" value={this.state.inputValue} onChange={this.onInputChange} />
              </label>
              <input className="btn-floating btn-large waves-effect waves-light red col " type="submit" value="Find" />
            </form>

          <div className="row">
            {this.state.stateContacts.map((contact) =>
                <ListItem key={contact.guid}
                  name={contact.name}
                  picture={contact.picture}
                  email={contact.email}
                  phone={contact.phone}/>
              )}
            </div>
        </div>
      )
    }

}
export default ContactList;
