// index.js
const express = require("express");
const _ = require("lodash");
const moment = require("moment");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello OWASP Dependency Check!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
