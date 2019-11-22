import React, { useState } from "react";

import SearchInputForm from "./SearchInputForm";
import CarListings from "./CarListings";

const Body = () => {
  const [listingsInfo, setListingsInfo] = useState({
    numberOfListings: null,
    listings: []
  });
  return (
    <div>
      <SearchInputForm setListingsInfo={setListingsInfo} />
      <CarListings listings={listingsInfo.listings} />
    </div>
  );
};

export default Body;
