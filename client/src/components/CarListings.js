import React from "react";

import CarListing from "./CarListing";

const CarListings = ({ listings }) => {
  return (
    <div>
      {listings.length > 0 &&
        listings.map(listing => (
          <CarListing
            key={listing.id}
            vin={listing.vin}
            heading={listing.heading}
            price={listing.price}
            miles={listing.miles}
            carURL={listing.vdp_url}
            exteriorColor={listing.exterior_color}
            interiorColor={listing.interior_color}
            inventoryType={listing.inventory_type}
            photoUrl={listing.media.photo_links[0]}
            dealer={listing.dealer}
            build={listing.build}
            distance={listing.distance}
          />
        ))}
    </div>
  );
};

// "id",
//       "vin",
//       "heading",
//       "price",
//       "miles",
//       "vdp_url",
//       "exterior_color",
//       "interior_color",
//       "inventory_type",
//       "media",
//       "dealer",
//       "build"
export default CarListings;
