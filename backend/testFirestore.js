//Run this to test Firestore
require("dotenv").config();
const firestoreUtils = require("/utils/firestoreUtils.js");

(async () => {
  try {
    await firestoreUtils.saveConversation("testUser", "Test query", "Test response");
    console.log("Firestore test successful.");
  } catch (error) {
    console.error("Error testing Firestore:", error);
  }
})();