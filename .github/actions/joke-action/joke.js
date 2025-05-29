// .github/actions/joke-action/joke.js
const request = require("request-promise");  
// request-promise is a Promise-based HTTP client for Node.js :contentReference[oaicite:0]{index=0}.

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true, // Auto-parse the JSON response body :contentReference[oaicite:1]{index=1}.
};

async function getJoke() {
  const res = await request(options);
  return res.joke; // Extract only the `joke` field from the API response
}

module.exports = getJoke;
