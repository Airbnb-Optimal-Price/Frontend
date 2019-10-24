import React, { useState, useEffect } from "react";
import ListingCards from "./ListingCards";
import { axiosWithAuth } from "../utils";

const Listings = ({values}) => {
  const [listing, setListing] = useState([]);
 
  useEffect(() => {
    axiosWithAuth()
      .get("/api/listings/")
      .then(res => {
        setListing(res.data);
      })
      .catch(err => console.log(err.response));
  }, [values]);

  return (
    <>
      <div className="members">
        {listing.map((item, index) => (
          <ListingCards key={index} listing={item} updateListing={setListing} />
        ))}
      </div>
    </>
  );
};

export default Listings;
