import React from "react";
import chart from "../images/chart.png";

const Landing = () => {
  return (
    <>
    <div className="hero">
      <div className="container">
        <h2>Increase revenue with <mark>data-driven</mark> pricing</h2>
        <p>
          We utilize market data to ensure our price recommendations maximize
          revenue and occupancy for our hosts.
        </p>
        <a href="#" className="myButton">Sign Up</a>
      </div>
    </div>
    <div className="wrapper">
      <h2>What is dynamic pricing? Why do vacation rentals need it?</h2>
      <img className="chart" src={chart} alt="Predicted price chart"/>
      <p> Dynamic pricing is varying your prices based on changes in demand. These are all different ways of saying, since demand is changing, so should your prices. If you’re not using a sophisticated dynamic pricing software like Airbnb Optimal Price for your vacation rental, you’re leaving money on the table.</p>
    </div>
    </>
  );
};

export default Landing;
