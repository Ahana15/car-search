const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/route");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

if (!module.parent) {
  const server = app.listen(8080, function() {
    console.log("app running on port 8080");
  });
}

module.exports = { app };
