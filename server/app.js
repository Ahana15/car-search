const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/route");
const app = express();

require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

if (!module.parent) {
  const server = app.listen(8080, function() {
    console.log("app running on port 8080");
  });
}

module.exports = { app };
