import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchInputForm = ({ setListingsInfo }) => {
  const onSubmitHandler = event => {
    event.preventDefault();
    axios
      .get(`http://localhost:8080/api/search`, {
        params: {
          manufacturer: event.target.manufacturer.value,
          model: event.target.model.value,
          year: event.target.year.value,
          location: event.target.location.value
        }
      })
      .then(res => setListingsInfo(res.data));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <TextField
          required
          id="manufacturer"
          label="Manufacturer"
          placeholder="eg: Ford"
          margin="normal"
        />
        <TextField
          required
          id="model"
          label="Model"
          placeholder="eg: Focus"
          margin="normal"
        />
        <TextField
          required
          id="year"
          label="Year"
          placeholder="eg: 2012"
          margin="normal"
        />
        <TextField
          required
          id="location"
          label="Location"
          placeholder="eg: Canada"
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchInputForm;
