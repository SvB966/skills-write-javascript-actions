// .github/actions/joke-action/main.js
const getJoke = require("./joke");  
const core = require("@actions/core"); // Toolkit for inputs/outputs and logging :contentReference[oaicite:2]{index=2}.

async function run() {
  try {
    const joke = await getJoke();
    console.log(joke); // So you can see it in the action logs
    core.setOutput("joke-output", joke);  
    // Declares the `joke-output` parameter you defined in action.yml :contentReference[oaicite:3]{index=3}.
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`);  
    // Best practice: mark the action as failed if anything goes wrong :contentReference[oaicite:4]{index=4}.
  }
}

run();
