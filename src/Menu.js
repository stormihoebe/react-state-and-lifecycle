import React from 'react';

function OpenMenu(){


  return (
    <div>
      <h1>Menu is Open!!</h1>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
        <li>Option 5</li>
        <li>Option 6</li>
        <li>Option 7</li>
        <li>Option 8</li>
        <li>Option 9</li>
      </ul>
    </div>
  )
}

function ClosedMenu(){

  return <h1>The Menu is Closed.</h1>
}

class Menu extends React.Component {

  constructor(){
   super();
   this.state = {
     isOpen: false
   }
   this.updateMenu = this.updateMenu.bind(this);
 }
updateMenu(event) {
   console.log("updateMenu");
   if(this.state.isOpen === false){
     this.setState({
       isOpen: true
     });
   } else {
     this.setState({
       isOpen: false
     });
   }
}
  render() {

    return (
      <div onClick={this.updateMenu}>
        {this.state.isOpen ? (
          <OpenMenu/>
        ) : (
          <ClosedMenu/>
        )}
      </div>
    )

  }
}

export default Menu;
