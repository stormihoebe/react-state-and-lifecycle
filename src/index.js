import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Grandparent from './Grandparent';
import registerServiceWorker from './registerServiceWorker';
import Greeting from './Greeting';
import Menu from './Menu';


ReactDOM.render(
  <div>
    <Menu/>
    <Clock/>
    <Grandparent/>
    <Greeting isUser={true} unreadMessages={33}/>
  </div>


  , document.getElementById('root'));
registerServiceWorker();
