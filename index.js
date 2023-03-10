const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send(`<html><head><body><h1>Hello World!</h1></body></head></html>`);
});

app.get("/api", function (req, res) {
  res.json({ firstname: "John", lastname: "Doe" });
});

app.get("/person/:id", function (req, res) {
  res.send(
    `<html><head><body><h1>Person: ${req.params.id}</h1></body></head></html>`
  );
});
app.listen(port);
