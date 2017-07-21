import React from 'react';

function UserGreeting(){
  return <h1>Hello Current User</h1>
}

function GuestGreeting(){
  return <h1>Hello Guest!</h1>
}

class Greeting extends React.Component {
  render() {
    const { isUser, unreadMessages} = this.props;
    return (
      <div>
        {isUser ? (
          <UserGreeting />
        ) : (
          <GuestGreeting />
        )}
        {unreadMessages > 0 && isUser ? (
          <p> You have {unreadMessages} messages</p>
        ) : (
          <p>Sign up</p>
        )}
      </div>
    )

  }
}

export default Greeting;
