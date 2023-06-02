import React from "react";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello() {
    const message = this.createChatBotMessage("Hello. Nice to meet you.");
    this.setState((prev) => {
      return { ...prev, messages: [...prev.messages, message] };
    });
  }
}

export default ActionProvider;
