import React from 'react';

function Goodbye(props){
  return(
    <div>
      <h3>Goodbye {props.catName}!</h3>
      <ol>
        <li>Hi {props.catName}</li>
        <li>Bye {props.name}</li>
      </ol>
    </div>
  );
}

export default Goodbye;
