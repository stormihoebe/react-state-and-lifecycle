import React from 'react';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var colors = ["red", "yellow", "green", "blue", "black", "orange"];
var myColor;

class ColorChanger extends React.Component {

  constructor(){
   super();
   this.state = {
     currentColor: "black"
   }
   this.updateColor = this.updateColor.bind(this)
 }

updateColor(event) {
  var myColor =  colors[getRandomInt(0, 5)];
  console.log(myColor);
     this.setState({
       currentColor: myColor
     });
}

  render() {

    return (
      <div onClick={this.updateColor} style={{backgroundColor: this.state.currentColor}}>
        <h1>{this.state.currentColor}</h1>
      </div>
    )

  }
}
export default ColorChanger;
