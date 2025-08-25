// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';
import { FaComments } from 'react-icons/fa'; // Using react-icons for the chat icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <button className="chatbot-button" onClick={toggleChatbot} aria-label="Open chat">
        <FaComments size={24} />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Chat with us!</h4>
            <button className="close-button" onClick={toggleChatbot} aria-label="Close chat">
              &times;
            </button>
          </div>
          <iframe
            title="Dialogflow Chatbot"
            width="100%"
            height="100%"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/23e6def8-dd7b-447d-b6ff-e429099c724e"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;