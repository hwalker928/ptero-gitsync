const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `example-input` input defined in action metadata file
  const exampleInput = core.getInput("example-input");
  console.log(`Hello ${exampleInput}!`);
  const time = new Date().toTimeString();
  core.setOutput("exoutput", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
