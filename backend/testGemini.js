//Run this to test Gemini
require("dotenv").config();
console.log("Current working directory:", process.cwd());
console.log("Attempting to load module:", "../services/geminiService");

const geminiService = require("/services/geminiService");

(async () => {
  try {
    console.log("Testing Gemini API...");
    const response = await geminiService.generateResponse("What should I invest in?");
    console.log("Gemini Response:", response);
  } catch (error) {
    console.error("Error testing Gemini:", error);
  }
})();