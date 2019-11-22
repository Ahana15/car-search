const axios = require("axios");

const appRouter = function(app) {
  app.get("/api/ping", (req, res) => {
    res.status(200).send({
      success: true
    });
  });

  app.get("/api/search", (req, res) => {
    const { manufacturer, model, year, location } = req.query;
    // axios.get(
    //   `http://marketcheck-prod.apigee.net/v1/search?api_key=${process.env.MARKETCHECK_API_KEY}&year=${year}&make=${manufacturer}&model=${model}&latitude=34.05&longitude=-118.24&radius=10000&car_type=used&start=0&rows=10`
    // );
    console.log(req.query);
    res.json({ hi: "hi" });
  });
};

module.exports = appRouter;
