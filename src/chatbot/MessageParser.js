import React from "react";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.toLowerCase().includes("hello")) {
      this.actionProvider.handleHello();
    }
  }
}

export default MessageParser;
