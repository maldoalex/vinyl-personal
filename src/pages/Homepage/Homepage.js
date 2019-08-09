import React from "react";
import Directory from "../../components/Directory/Directory";
// import { Link } from "react-router-dom";
import "./Homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;

/* <h1>Homepage</h1>
    <div className="tile-menu">
      <div className="tile">
        <div className="content">
          <div className="title">VINYL</div>
          <Link to="/shop" className="subtitle">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="tile">
        <div className="content">
          <div className="title">ABOUT US</div>
          <Link to="/about" className="subtitle">
            Learn More
          </Link>
        </div>
      </div>
      <div className="tile">
        <div className="content">
          <div className="title">HARDWARE</div>
          <Link to="/hardware_shop" className="subtitle">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="tile">
        <div className="content">
          <div className="title">EVENTS</div>
          <span className="subtitle">Check Local Shows</span>
        </div>
      </div>
      <div className="tile">
        <div className="content">
          <div className="title">MEMBERS</div>
          <span className="subtitle">Join the Club</span>
        </div>
      </div>
    </div> */
