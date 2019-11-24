const pick = require("lodash/pick");

const filterCarInformation = data => {
  let listingsWithFilteredKeys = {
    numberOfListings: data.num_found,
    listings: filterListings(data.listings)
  };
  return listingsWithFilteredKeys;
};

const filterListings = data => {
  return data.map(listing =>
    pick(listing, [
      "id",
      "vin",
      "heading",
      "price",
      "miles",
      "vdp_url",
      "exterior_color",
      "interior_color",
      "inventory_type",
      "media",
      "dealer",
      "build",
      "dist"
    ])
  );
};

module.exports = { filterCarInformation };
