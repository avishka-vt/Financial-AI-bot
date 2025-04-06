const geminiService = require("../services/geminiService");
const firestoreUtils = require("../utils/firestoreUtils");
const marked = require("marked"); // Library to convert Markdown to HTML

exports.chat = async (req, res) => {
  const { query, userId } = req.body;

  try {
    // Log the incoming request
    console.log("Received request:", { query, userId });

    // Validate input
    if (!query || !userId) {
      return res.status(400).json({ error: "Missing required fields: query and userId." });
    }

    // Generate response using Gemini
    console.log("Generating Gemini response...");
    let responseText = await geminiService.generateResponse(query);

    // Convert Markdown to HTML for better readability
    responseText = marked.parse(responseText);

    // Save conversation to Firestore
    console.log("Saving conversation to Firestore...");
    await firestoreUtils.saveConversation(userId, query, responseText);

    // Send the formatted response back to the client
    console.log("Sending response to client...");
    res.json({ response: responseText });
  } catch (error) {
    // Log detailed error information
    console.error("Detailed error:", error.message);
    console.error("Stack trace:", error.stack);

    // Provide meaningful error messages to the client
    if (error.message.includes("Gemini")) {
      return res.status(500).json({ error: "Failed to generate a response from Gemini." });
    }
    if (error.message.includes("Firestore")) {
      return res.status(500).json({ error: "Failed to save the conversation to Firestore." });
    }
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};