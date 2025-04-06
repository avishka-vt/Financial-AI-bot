const express = require("express");
const chatController = require("../controllers/chatController");

const router = express.Router();

// Route for handling chatbot queries
router.post("/api/chat", chatController.chat);

module.exports = router;