# Financial-AI-bot
A React-based chatbot platform that provides personalized investment advice powered by Google's Gemini API. The chatbot is designed to guide users through their financial goals, offering tailored recommendations and tips based on user input.

## Features
- Personalized Investment Advice : Provides tailored financial advice based on user queries.
- Loading Indicator : Displays a spinner while waiting for responses from the backend.
- Context-Aware Responses : Ensures all responses are focused on investment-related topics.
- Conversation History : Stores chat history in Firestore for future reference.
- Markdown Support : Renders HTML-formatted responses for better readability.

## Technologies Used
1. Frontend :
- React.js
- Axios (for API requests)
- CSS (for styling)
2. Backend :
- Node.js
- Express.js
- Google Gemini API (for generating responses)
- Firebase Firestore (for storing conversations)
3. Other Tools :
- CORS (for handling cross-origin requests)
- dotenv (for managing environment variables)

## Installation
To run this project locally, follow these steps:
1. Clone repository
```bash
git clone https://github.com/avishka-vt/Financial-AI-bot.git
cd Financial-AI-bot
```
2. Install dependancies for frontend and backend
```bash
cd frontend
npm install
```
```bash
cd backend
npm install
```
3. Run the Development Server for both
```bash
npm start
```
4. Open in Browser (local host port: 3000)

## Usage
1. Open the frontend application in your browser at http://localhost:3000.
2. Enter your query in the input field (e.g., "I am a beginner, give me investment tips").
2. The chatbot will respond with personalized investment advice.

## API Endpoints
POST /api/chat
- Description : Sends a user query to the backend and returns an AI-generated response.
- Request Body:
```json
{
  "query": "Your question here",
  "userId": "user123"
}
```
- Response:
```json
{
  "response": "<p>AI-generated response here</p>"
}
```

## Generation
1. service-account-key.json:
This file has been replaced with a placeholder. Generate your json file via Google Cloud Console (IAM->service account-> manage keys-> generate new)
2. firebaseConfid.js:
This file has been replaced with a placeholder. Generate your json file via Firebase Console
3. .env file:
These files require you to replace placeholders with your Credentials (Do not share these with others)

## Acknowledgments
Thanks to Google for providing the Gemini API for natural language processing.
Special thanks to the Firebase team for their robust Firestore database solution.