const axios = require("axios");
const { filterCarInformation } = require("../helpers/searchHelpers");

const appRouter = function(app) {
  app.get("/api/ping", (req, res) => {
    res.status(200).send({
      success: true
    });
  });

  app.get("/api/search", (req, res) => {
    const { make, model, year, latitude, longitude } = req.query;
    axios
      .get("http://marketcheck-prod.apigee.net/v1/search", {
        params: {
          api_key: process.env.MARKETCHECK_API_KEY,
          radius: 7,
          year,
          make,
          model,
          latitude,
          longitude,
          country: "ALL"
        }
      })
      .then(response => res.json(filterCarInformation(response.data)))
      .catch(error => console.log(error));
  });

  app.get("/api/filtermodelbymake", (req, res) => {
    const { make } = req.query;
    axios
      .get("http://marketcheck-prod.apigee.net/v1/search/auto-complete", {
        params: {
          api_key: process.env.MARKETCHECK_API_KEY,
          field: "model",
          input: "",
          make
        }
      })
      .then(response => res.json(response.data))
      .catch(error => console.log(error));
  });
};

module.exports = appRouter;
