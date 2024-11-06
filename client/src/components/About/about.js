import React from "react";
import "./about.scss"; // Import the styling for the About component

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Your trusted partner for real estate transactions and property
          management
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Buy and Sell Properties</h2>
          <p>
            We provide a seamless platform for buying and selling real estate
            properties. Whether you're a first-time buyer or an experienced
            investor, we have a variety of properties to meet your needs. Our
            team helps you navigate the market, ensuring you get the best deal
            possible.
          </p>
        </section>

        <section className="about-section">
          <h2>Rent or Lease Properties</h2>
          <p>
            Looking for a place to stay? Or maybe you have a property available
            for rent? We make it easy to either find a property for rent or
            offer your own property for rent. Our platform connects landlords
            and tenants with ease, providing an efficient way to handle lease
            agreements.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
