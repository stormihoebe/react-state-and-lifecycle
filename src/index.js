import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Grandparent from './Grandparent';
import registerServiceWorker from './registerServiceWorker';
import Greeting from './Greeting';
import Menu from './Menu';
import ColorChanger from './ColorChanger.js';
import NameForm from './NameForm';
import NumberList from './NumberList';
import { Button, Card, Row, Col } from 'react-materialize';
import ContactList from './ContactList';
import contacts from './contacts.json';


ReactDOM.render(

  <div>
    <div className="row">
      <div className="col m4 card">
          <Menu/>
      </div>
      <div className="col m4 card">
          <Clock/>
      </div>
      <div className="col m4 card">
          <Grandparent/>
      </div>
    </div>
    <div className="row">
      <div className="col m4 card">
          <Greeting isUser={true} unreadMessages={33}/>
      </div>
      <div className="col m4 card">
          <ColorChanger/>
      </div>
      <div className="col m4 card">
          <NameForm/>
      </div>
    </div>


    <NumberList numbers={[1, 2, 3, 4, 5]}/>
    <ContactList/>
  </div>


  , document.getElementById('root'));
registerServiceWorker();
