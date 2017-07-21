import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Grandparent from './Grandparent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Clock/>,
    <Grandparent/>
  </div>


  , document.getElementById('root'));
registerServiceWorker();
