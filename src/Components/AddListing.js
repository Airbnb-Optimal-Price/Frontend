import React, { useState } from "react";
import { axiosWithAuth } from "../utils";
import Listings from "./Listings";


const initialState = {
  label: undefined,
  accomodates: undefined,
  bathrooms: undefined,
  bedrooms: undefined,
  beds: undefined,
  bed_type: undefined,
  instant_bookable: undefined,
  minimum_nights: undefined,
  neighborhood: undefined,
  room_type: undefined,
  wifi: undefined
};

const AddListing = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const listings = { ...values, users_id: localStorage.getItem("id") };
    console.log(listings);
    axiosWithAuth()
      .post(`/api/listings`, listings)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="listing" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="label"
          onChange={handleChange}
          value={values.label}
          placeholder="Add Label"
          required
        />
          <select
            name="accomodates"
            value={values.accomodates}
            onChange={handleChange}
          >
            <option value="">Select Guest</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select
            name="bathrooms"
            value={values.bathrooms}
            onChange={handleChange}
          >
            <option value="">Select Bathrooms</option>
            <option value="1.0">1.0</option>
            <option value="1.5">1.5</option>
            <option value="2.0">2.0</option>
          </select>
          <select
            name="bedrooms"
            value={values.bedrooms}
            onChange={handleChange}
          >
            <option value="">Select Bedrooms</option>
            <option value="0.0">0.0</option>
            <option value="1.0">1.0</option>
            <option value="2.0">2.0</option>
            <option value="3.0">3.0</option>
          </select>
          <select name="beds" value={values.beds} onChange={handleChange}>
            <option value="">Select Beds</option>
            <option value="1.0">1.0</option>
            <option value="2.0">2.0</option>
            <option value="3.0">3.0</option>
            <option value="4.0">4.0</option>
          </select>
          <select
            name="bed_type"
            value={values.bed_type}
            onChange={handleChange}
          >
            <option value="">Select Bed Type</option>
            <option value="Real Bed">Real Bed</option>
            <option value="Pull-out Sofa">Pull-out Sofa</option>
            <option value="Futon">Futon</option>
            <option value="Couch">Couch</option>
            <option value="Airbed">Airbed</option>
          </select>
          <select
            name="instant_bookable"
            value={values.instant_bookable}
            onChange={handleChange}
          >
            <option value="">Select Instant Bookable</option>
            <option value="0">Not Available</option>
            <option value="1">Available</option>
          </select>
          <select
            name="minimum_nights"
            value={values.minimum_nights}
            onChange={handleChange}
          >
            <option value="">Select Minimum Nights</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          <select
            name="neighborhood"
            value={values.neighborhood}
            onChange={handleChange}
          >
            <option value="">Select Neighborhood</option>
            <option value="Friedrichshain-Kreuzberg">
              Friedrichshain-Kreuzberg
            </option>
            <option value="Mitte">Mitte</option>
            <option value="Pankow">Pankow</option>
            <option value="Neukolln">Neukolln</option>
          </select>
          <select
            name="room_type"
            value={values.room_type}
            onChange={handleChange}
          >
            <option value="">Select Room Type</option>
            <option value="Private room">Private room</option>
            <option value="Entire home/apt">Entire home/apt</option>
            <option value="Shared room">Shared room</option>
          </select>
          <select name="wifi" value={values.wifi} onChange={handleChange}>
            <option value="">Select Wifi</option>
            <option value="0">Not Available</option>
            <option value="1">Available</option>
          </select>
        <button type="submit">Add Listing</button>
      </form>
      <Listings values={values} />
    </>
  );
};

export default AddListing;
