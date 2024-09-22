const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 5501;

app.get("/", (req, res) => {
  res.send("Hello world one");
});

app.listen(port, () => {
  console.log("Service is running in port: ", +port);
});
