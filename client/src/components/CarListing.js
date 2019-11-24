import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";

import "../assets/stylesheets/CarListing.css";

const CarListing = ({
  vin,
  heading,
  price,
  miles,
  carURL,
  exteriorColor,
  interiorColor,
  inventoryType,
  photoUrl,
  dealer,
  build,
  distance
}) => {
  const [showCarDetails, setShowCarDetails] = useState(false);
  return (
    <div>
      <Card className="car-listing">
        <CardHeader
          title={heading}
          subheader={`${
            price ? "Price: $ " + price : "No price available"
          }, Distance: ${distance ? `${distance} miles away` : "-"}`}
        />
        <div className="card-info">
          <img
            className="car-image"
            src={photoUrl ? photoUrl : "noimageavailable.png"}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="dealer-info"
            >
              <b>Address: </b>
              {`${dealer.street}, ${dealer.city}, ${dealer.state}, ${dealer.country}, ${dealer.zip}`}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="dealer-info"
            >
              <b>Website Link: </b>
              <Link href={carURL} variant="body2" className="dealer-info">
                {dealer.name}
              </Link>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="dealer-info"
            >
              <b>Inventory Type: </b>
              {`${inventoryType}`}
            </Typography>
          </CardContent>
        </div>
        <CardActions disableSpacing className="expand-icon">
          <IconButton
            onClick={() => setShowCarDetails(!showCarDetails)}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        {showCarDetails && (
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className="car-details"
            >
              <b>Vehicle Build </b>
              <div>
                <b>Year: </b>
                {`${build.year ? build.year : "-"}`}
              </div>
              <div>
                <b>Body Type: </b>
                {`${build.body_type ? build.body_type : "-"}`}
              </div>
              <div>
                <b>Transmission: </b>
                {`${build.transmission ? build.transmission : "-"}`}
              </div>
              <div>
                <b>Fuel type: </b>
                {`${build.fuel_type ? build.fuel_type : "-"}`}
              </div>
              <div>
                <b>Doors: </b>
                {`${build.doors ? build.doors : "-"}`}
              </div>
              <div>
                <b>Cylinders: </b>
                {`${build.cylinders ? build.cylinders : "-"}`}
              </div>
              <div>
                <b>Vin Number: </b>
                {`${vin ? vin : "-"}`}
              </div>
              <div>
                <b>Miles: </b>
                {`${miles ? miles : "-"}`}
              </div>
              <div>
                <b>Exterior Color: </b>
                {`${exteriorColor ? exteriorColor : "-"}`}
              </div>
              <div>
                <b>Interior Color: </b>
                {`${interiorColor ? interiorColor : "-"}`}
              </div>
            </Typography>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default CarListing;
