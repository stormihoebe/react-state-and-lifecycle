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


ReactDOM.render(
  <div>
    <Menu/>
    <Clock/>
    <Grandparent/>
    <Greeting isUser={true} unreadMessages={33}/>
    <ColorChanger/>
  </div>


  , document.getElementById('root'));
registerServiceWorker();
