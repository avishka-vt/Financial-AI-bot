const { SessionsClient } = require("@google-cloud/dialogflow");

const projectId = process.env.PROJECT_ID;
const sessionPath = new SessionsClient().projectAgentSessionPath(projectId, "unique-session-id");

exports.processQuery = async (query) => {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: "en-US",
      },
    },
  };

  const [response] = await new SessionsClient().detectIntent(request);

  const intent = response.queryResult.intent.displayName;
  const parameters = response.queryResult.parameters;
  const fulfillmentText = response.queryResult.fulfillmentText;

  return { intent, parameters, response: fulfillmentText };
};