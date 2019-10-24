import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils";
import EditForm from "./EditForm";
import axios from "axios";

const ListingCards = ({ listing, updateListing}) => {
  const [editing, setEditing] = useState(false);
  const [listingToEdit, setListingToEdit] = useState()
  const [price, setPrice] = useState({});

  console.log(price)

  const editListing = listing => {
    console.log("Clicked", listing);
    setEditing(true);
    setListingToEdit(listing);
  }

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/api/listings/${listingToEdit.id}`, listingToEdit)
    .then(res => {
      updateDelete();
    })
    .catch(err => console.log(err.response))
  };
  
  useEffect(() => {
    const values = listing;
    const pricing = { ...values};
    delete pricing["label"];
    delete pricing["users_id"];
    delete pricing["id"];
    console.log(pricing)
    axios
      .post(`https://airbnb-predictor.herokuapp.com/request`, pricing)
      .then(res => { 
        console.log(res.data)
        return setPrice(res.data)
      })
      .catch(err => console.log(err.response));
  }, []);

  const updateDelete = () => {
    axiosWithAuth()
      .get("/api/listings/")
      .then(res => {
        updateListing(res.data);
      });
  };

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`/api/listings/${id}`)
      .then(res => {
        updateDelete();
      })
      .catch(error => console.log(error));
  };



  return (
    <div>
      <div className="person">
        <i
          className="far fa-trash-alt delete"
          onClick={() => handleDelete(listing.id)}
        ></i>
        <i className="far fa-edit  edit" onClick={() => editListing(listing)}></i>
        <p>Label: {listing.label}</p>
        <p>Accomodates: {listing.accomodates}</p>
        <p>Bathrooms: {listing.bathrooms}</p>
        <p>Beds: {listing.beds}</p>
        <p>Bed Type: {listing.bed_type}</p>
        <p>Instant Bookable: {listing.instant_bookable}</p>
        <p>Neighborhood: {listing.neighborhood}</p>
        <p>Room Type: {listing.room_type}</p>
        <p>Wifi: {listing.wifi}</p>
        <p>Optimal Price: {price.prediction}</p>
      </div>
      <div>
        {editing && 
          <EditForm listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} saveEdit={saveEdit} setEditing={setEditing}/>
        }
      </div>
    </div>

  );
};

export default ListingCards;
