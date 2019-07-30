import React from "react";

const DUMMY_DATA = [
  {
    senderId: "Alice",
    text: "Hello!"
  },
  {
    senderId: "Bob",
    text: "Hi! How are you?"
  },
  {
    senderId: "Alice",
    text: "I'm good!"
  }
];

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return <div>{message.text}</div>;
        })}
      </div>
    );
  }
}

export default MessageList;
