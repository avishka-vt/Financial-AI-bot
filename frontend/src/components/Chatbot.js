import React, { useState } from "react";
import axios from "axios";
import "../styles/Chatbot.css"; 

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your AI Financial Advisor. How can I help you today?" },
  ]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
  
    // Add context to the user query
    const modifiedQuery = `Provide investment advice for the following: ${userInput}`;
  
    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput }, // Display the original query to the user
    ]);
  
    // Clear input and show loading indicator
    setUserInput("");
    setIsLoading(true);
  
    try {
      // Send request to backend with the modified query
      const response = await axios.post(
        "http://localhost:5000/api/chat",
        { query: modifiedQuery, userId: "user123" } // Use the modified query
      );
  
      // Add bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: response.data.response },
      ]);
    } catch (error) {
      console.error("Error communicating with the backend:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "An error occurred. Please try again later." },
      ]);
    }
  
    // Hide loading indicator
    setIsLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Financial Advisory</h1>
      <p>
        Get personalized financial advice powered by advanced AI.
      </p>

      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === "bot" && <div className="bot-avatar">🤖</div>}
            <div
              className="message-card"
              dangerouslySetInnerHTML={{ __html: message.text }} // Render HTML
            />
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="user-input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Tell us about your financial goals..."
          required
          className="user-input"
          disabled={isLoading} // Disable input while loading
        />
        <button type="submit" className="send-button" disabled={isLoading}>
          {isLoading ? (
            <>
              Sending... <span className="loading-spinner"></span>
            </>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}

export default Chatbot;