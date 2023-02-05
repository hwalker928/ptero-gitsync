const core = require("@actions/core");
const request = require("request");

try {
  const panelURL = core.getInput("panel-url");
  const apiKey = core.getInput("api-key");
  const serverID = core.getInput("server-id");

  request.post(`${panelURL}/api/client/servers/${serverID}/power`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    json: {
      signal: "restart",
    },
  });
} catch (error) {
  core.setFailed(error.message);
}
