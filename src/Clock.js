import React from 'react';

//complete independent or incapsulated Component
class Clock extends React.Component{
// initializes the state with the initial date
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }
//set interval updates the clock with the tick function
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

//override the state with the given date
  tick(){
    this.setState({
      date: new Date()
      // you can set any number of state object's values here
    })
  }

  render(){
    return(
      <div>
        <h1>Hello, World!</h1>
        <h2>It is Now {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default Clock;
