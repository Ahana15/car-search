const axios = require("axios");
const { filterCarInformation } = require("../helpers/searchHelpers");

const appRouter = function(app) {
  app.get("/api/ping", (req, res) => {
    res.status(200).send({
      success: true
    });
  });

  app.get("/api/search", (req, res) => {
    const { manufacturer, model, year, location } = req.query;
    axios
      .get(
        `http://marketcheck-prod.apigee.net/v1/search?api_key=${process.env.MARKETCHECK_API_KEY}&year=${year}&make=${manufacturer}&model=${model}&latitude=34.05&longitude=-118.24&radius=10000&car_type=used&start=0&rows=10`
      )
      .then(response => res.json(filterCarInformation(response.data)));
  });
};

module.exports = appRouter;

let data = {
  num_found: 7699,
  listings: [
    {
      id: "4T1BF1FK8HU316557-a1054465-a7a0",
      vin: "4T1BF1FK8HU316557",
      heading: "Pre-Owned 2017 Toyota Camry XSE 4dr Car FWD",
      price: 16998,
      miles: 48487,
      msrp: 16998,
      data_source: "mc",
      vdp_url:
        "https://www.toyotaofdowntownla.com/inventory/used-2017-toyota-camry-xse-fwd-4dr-car-4t1bf1fk8hu316557",
      carfax_1_owner: true,
      carfax_clean_title: false,
      exterior_color: "Predawn Gray Mica",
      interior_color: "Black",
      dom: 141,
      dom_180: 33,
      dom_active: 33,
      seller_type: "dealer",
      inventory_type: "used",
      stock_no: "T0040849-1",
      last_seen_at: 1574284999,
      last_seen_at_date: "2019-11-20T21:23:19.000Z",
      scraped_at: 1573872722,
      scraped_at_date: "2019-11-16T02:52:02.000Z",
      first_seen_at: 1573872722,
      first_seen_at_date: "2019-11-16T02:52:02.000Z",
      ref_price: 17588,
      ref_price_dt: 1573782886,
      ref_miles: 48487,
      ref_miles_dt: 1573782886,
      source: "toyotaofdowntownla.com",
      media: {
        photo_links: [
          "https://720a8c0602eba626e88e-2732f80820d6225441de2e983ea5221e.ssl.cf1.rackcdn.com/4T1BF1FK8HU316557/bb5f6f1a54a49a40a18c14723c00bef0.jpg"
        ]
      },
      dealer: {
        id: 1007722,
        website: "toyotaofdowntownla.com",
        name: "Toyota of Downtown Los Angeles",
        dealer_type: "franchise",
        street: "1600 South Figueroa Street",
        city: "Los Angeles",
        state: "CA",
        country: "US",
        latitude: "34.0373",
        longitude: "-118.2699",
        zip: "90015"
      },
      build: {
        year: 2017,
        make: "Toyota",
        model: "Camry",
        trim: "XSE",
        body_type: "Sedan",
        vehicle_type: "Car",
        transmission: "Automatic",
        drivetrain: "FWD",
        fuel_type: "Unleaded",
        engine: "2.5L I4",
        engine_size: 2.5,
        engine_block: "I",
        doors: 4,
        cylinders: 4
      },
      dist: 1.92
    },
    {
      id: "4T1BF1FKXHU330752-8419e734-2252",
      vin: "4T1BF1FKXHU330752",
      heading: "Certified Pre-Owned 2017 Toyota Camry SE 4dr Car FWD",
      price: 19998,
      miles: 7675,
      msrp: 19998,
      data_source: "mc",
      is_certified: 1,
      vdp_url:
        "https://www.toyotaofdowntownla.com/inventory/certified-used-2017-toyota-camry-se-fwd-4dr-car-4t1bf1fkxhu330752",
      carfax_1_owner: true,
      carfax_clean_title: false,
      exterior_color: "Celestial Silver Metallic",
      interior_color: "BLACK",
      dom: 38,
      dom_180: 4,
      dom_active: 4,
      seller_type: "dealer",
      inventory_type: "used",
      stock_no: "TU5026",
      last_seen_at: 1574284958,
      last_seen_at_date: "2019-11-20T21:22:38.000Z",
      scraped_at: 1574121082,
      scraped_at_date: "2019-11-18T23:51:22.000Z",
      first_seen_at: 1574121082,
      first_seen_at_date: "2019-11-18T23:51:22.000Z",
      ref_price: 0,
      ref_miles: 0,
      source: "toyotaofdowntownla.com",
      media: {
        photo_links: [
          "https://720a8c0602eba626e88e-2732f80820d6225441de2e983ea5221e.ssl.cf1.rackcdn.com/4T1BF1FKXHU330752/6310eda1760e69126350a3e9f3abc6b3.jpg"
        ]
      },
      dealer: {
        id: 1007722,
        website: "toyotaofdowntownla.com",
        name: "Toyota of Downtown Los Angeles",
        dealer_type: "franchise",
        street: "1600 South Figueroa Street",
        city: "Los Angeles",
        state: "CA",
        country: "US",
        latitude: "34.0373",
        longitude: "-118.2699",
        zip: "90015"
      },
      build: {
        year: 2017,
        make: "Toyota",
        model: "Camry",
        trim: "SE",
        body_type: "Sedan",
        vehicle_type: "Car",
        transmission: "Automatic",
        drivetrain: "FWD",
        fuel_type: "Unleaded",
        engine: "2.5L I4",
        engine_size: 2.5,
        engine_block: "I",
        doors: 4,
        cylinders: 4
      },
      dist: 1.92
    }
  ]
};
