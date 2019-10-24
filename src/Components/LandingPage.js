import React from "react";
import chart from "../images/chart.png";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
    <Navbar />
    <div className="hero">
      <div className="container">
        <h2>Increase revenue with <mark>data-driven</mark> pricing</h2>
        <p>
          We utilize market data to ensure our price recommendations maximize
          revenue and occupancy for our hosts.
        </p>
        <Link to="/registration" className="myButton">Sign Up</Link>
      </div>
    </div>
    <div className="wrapper" id="DATA-DRIVEN">
      <h2>What is dynamic pricing? Why do vacation rentals need it?</h2>
      <img className="chart" src={chart} alt="Predicted price chart"/>
      <p> Dynamic pricing is varying your prices based on changes in demand. These are all different ways of saying, since demand is changing, so should your prices. If you’re not using a sophisticated dynamic pricing software like Airbnb Optimal Price for your vacation rental, you’re leaving money on the table.</p>
    </div>
    <Footer />
    </>
  );
};

export default Landing;
