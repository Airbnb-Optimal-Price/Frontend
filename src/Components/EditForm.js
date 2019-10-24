import React from "react";


const EditForm = ({listingToEdit, setListingToEdit, saveEdit, setEditing}) => {
 
  const handleChange = event => {
    setListingToEdit({ ...listingToEdit, [event.target.name]: event.target.value });
  };


  return ( 
    <form className="listing" onSubmit={saveEdit}>
        <input
          className="input"
          type="text"
          name="label"
          onChange={handleChange}
          value={listingToEdit.label}
          placeholder="Label"
          required
        />
        <label>
          Guests:
          <select
            name="accomodates"
            value={listingToEdit.accomodates}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <label>
          Bathrooms:
          <select
            name="bathrooms"
            value={listingToEdit.bathrooms}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="1.0">1.0</option>
            <option value="1.5">1.5</option>
            <option value="2.0">2.0</option>
          </select>
        </label>
        <label>
          Bedrooms:
          <select
            name="bedrooms"
            value={listingToEdit.bedrooms}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0.0">0.0</option>
            <option value="1.0">1.0</option>
            <option value="2.0">2.0</option>
            <option value="3.0">3.0</option>
          </select>
        </label>
        <label>
          Beds:
          <select name="beds" value={listingToEdit.beds} onChange={handleChange}>
            <option value="">Select</option>
            <option value="1.0">1.0</option>
            <option value="2.0">2.0</option>
            <option value="3.0">3.0</option>
            <option value="4.0">4.0</option>
          </select>
        </label>
        <label>
          Bed Type:
          <select
            name="bed_type"
            value={listingToEdit.bed_type}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Real Bed">Real Bed</option>
            <option value="Pull-out Sofa">Pull-out Sofa</option>
            <option value="Futon">Futon</option>
            <option value="Couch">Couch</option>
            <option value="Airbed">Airbed</option>
          </select>
        </label>
        <label>
          Instant Bookable:
          <select
            name="instant_bookable"
            value={listingToEdit.instant_bookable}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="0">Not Available</option>
            <option value="1">Available</option>
          </select>
          Minimum Nights:
          <select
            name="minimum_nights"
            value={listingToEdit.minimum_nights}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </label>
        <label>
          Neighborhood:
          <select
            name="neighborhood"
            value={listingToEdit.neighborhood}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Friedrichshain-Kreuzberg">
              Friedrichshain-Kreuzberg
            </option>
            <option value="Mitte">Mitte</option>
            <option value="Pankow">Pankow</option>
            <option value="Neukolln">Neukolln</option>
          </select>
        </label>
        <label>
          Room Type:
          <select
            name="room_type"
            value={listingToEdit.room_type}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Private room">Private room</option>
            <option value="Entire home/apt">Entire home/apt</option>
            <option value="Shared room">Shared room</option>
          </select>
        </label>
        <label>
          Wifi:
          <select name="wifi" value={listingToEdit.wifi} onChange={handleChange}>
            <option value="">Select</option>
            <option value="0">Not Available</option>
            <option value="1">Available</option>
          </select>
        </label>
        <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
      </form>
   );
}
 
export default EditForm;