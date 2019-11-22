const axios = require("axios");

const appRouter = function(app) {
  app.get("/api/ping", (req, res) => {
    res.status(200).send({
      success: true
    });
  });
};

module.exports = appRouter;
