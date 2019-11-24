import React, { useEffect, useState } from "react";
import axios from "axios";
import { make } from "../constants/carMakes";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "../assets/stylesheets/SearchInputForm.css";

const SearchInputForm = ({ setListingsInfo }) => {
  const [modelOptions, setModelOptions] = useState([]);
  const [makeValue, setMakeValue] = useState("");
  const [modelValue, setModelValue] = useState("");

  useEffect(() => {
    if (!makeValue) {
      setModelOptions([]);
    } else {
      axios
        .get("http://localhost:8080/api/filtermodelbymake", {
          params: {
            make: makeValue
          }
        })
        .then(res => setModelOptions(res.data.terms));
    }
  }, [makeValue]);

  useEffect(() => {
    const input = document.getElementById("location");
    const options = {
      types: ["address"]
    };

    const autocomplete = new window.google.maps.places.Autocomplete(
      input,
      options
    );
  }, []);

  const onSubmitHandler = event => {
    event.preventDefault();
    const geocoder = new window.google.maps.Geocoder();
    const fullAddress = event.target.location.value;

    event.persist();

    geocoder.geocode({ address: fullAddress }, function(results, status) {
      if (status === "OK") {
        axios
          .get("http://localhost:8080/api/search", {
            params: {
              make: event.target.manufacturer.value,
              model: event.target.model.value,
              year: event.target.year.value,
              latitude: results[0].geometry.location.lat(),
              longitude: results[0].geometry.location.lng()
            }
          })
          .then(res => setListingsInfo(res.data));
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form-inputs">
        <Autocomplete
          id="manufacturer"
          options={make}
          getOptionLabel={option => option}
          style={{ width: 300 }}
          onChange={event => setMakeValue(event.target.innerText)}
          renderInput={params => (
            <TextField
              {...params}
              required
              label="Manufacturer"
              placeholder="eg: Honda"
              margin="normal"
              value={makeValue}
              fullWidth
            />
          )}
        />
        <Autocomplete
          id="model"
          options={modelOptions}
          getOptionLabel={option => option}
          style={{ width: 300 }}
          onChange={event => setModelValue(event.target.innerText)}
          renderInput={params => (
            <TextField
              {...params}
              required
              label="Model"
              placeholder="eg: Accord"
              margin="normal"
              value={modelValue}
              fullWidth
            />
          )}
        />
        <TextField
          required
          id="year"
          label="Year"
          placeholder="eg: 2017"
          margin="normal"
        />
        <TextField
          required
          id="location"
          label="Address"
          placeholder="eg: Hollywood Boulevard"
          margin="normal"
          className="location-dropdown"
          fullWidth
        />
        <Button className="form-button" variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchInputForm;
