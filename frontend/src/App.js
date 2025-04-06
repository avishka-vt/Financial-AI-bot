import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Chatbot />
    </div>
  );
}

export default App;