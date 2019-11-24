import React, { Suspense, lazy, useState, useEffect } from "react";
import TablePagination from "@material-ui/core/TablePagination";

import Loading from "./Loading";
import AveragePrice from "./AveragePrice";

import "../assets/stylesheets/Carlistings.css";

const CarListing = lazy(() => import("./CarListing"));

const CarListings = ({ listings }) => {
  const [averagePrice, setAveragePrice] = useState(0);
  const [page, setPage] = useState(0);
  const [listingsPerPage, setListingsPerPage] = useState(5);

  useEffect(() => {
    setAveragePrice(
      listings.map(listing => listing.price).reduce((a, b) => a + b, 0) /
        listings.length
    );
  }, [listings]);

  const onChangePageHandler = (event, newPage) => {
    setPage(newPage);
  };

  const onChangeRowsPerPageHandler = event => {
    setListingsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {listings.length > 0 && <AveragePrice average={averagePrice} />}
        <b className="listings-header">Listings:</b>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={listings.length}
          rowsPerPage={listingsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={onChangePageHandler}
          onChangeRowsPerPage={onChangeRowsPerPageHandler}
          labelRowsPerPage="Listings per page:"
          className="listings-list-header"
        />
        {listings.length === 0 ? (
          <div className="no-listing">
            There are no listings for the given parameters
          </div>
        ) : (
          listings
            .slice(
              page * listingsPerPage,
              page * listingsPerPage + listingsPerPage
            )
            .map(listing => (
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
                distance={listing.dist}
              />
            ))
        )}
      </Suspense>
    </div>
  );
};

export default CarListings;
