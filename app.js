const express = require("express");
const app = express();
const path = require("path");

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use(express.static("public/images"));
app.use(express.static("public/css"));

app.listen(8080);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'public', "views", "index.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, 'public', "views", "tables.html"));
});