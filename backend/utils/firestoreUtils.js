const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
  });
}

const db = admin.firestore();

exports.saveConversation = async (userId, query, response) => {
  await db.collection("conversations").add({
    userId,
    messages: [{ sender: "user", text: query }, { sender: "bot", text: response }],
    timestamp: new Date(),
  });
};