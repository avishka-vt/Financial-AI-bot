const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateResponse = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    // Add a system prompt to guide the model
    const systemPrompt = `
      You are an AI financial advisor focused on providing investment-related advice. 
      If the user's query is not related to investments, politely ask them to clarify their question.
    `;

    // Combine the system prompt with the user's query
    const fullPrompt = `${systemPrompt}\nUser Query: ${prompt}`;

    const result = await model.generateContent(fullPrompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating Gemini response:", error);
    throw error;
  }
};
