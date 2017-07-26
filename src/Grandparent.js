import React from 'react';
// When to use props vs. state
//Use state when you are within an object component and you are passing state to a lower level component as props. State encapsulates data within a component
//Use props when you are sending data down from a parent component to its children

class Grandparent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firstName: "Ron",
      lastName: "Hoebelheinrich"
    };
  }
  render(){
    const {firstName, lastName} = this.state;
    return(
      <div>
        <p>My grandpa{"'"}s name is {firstName + " " + lastName}</p>
        <Parent lastName={this.state.lastName}/>
      </div>
    )
  }
}

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: "Jarrett",
      children: ["Stormi", "Cotton"]
    };
  }
  render(){
    return(
      <div>
        <p>My dad has the last name of {this.props.lastName}. His first name is {this.state.firstName}. I am his only child. My name is {this.state.children[0]}. {this.state.children[1]} is our dog{"'"}s name.</p>
        <Child lastName={this.props.lastName}/>
      </div>
    )
  }
}
function Child(props){
  return(
    <h5>My last name is {props.lastName}</h5>
  )
}

export default Grandparent;
