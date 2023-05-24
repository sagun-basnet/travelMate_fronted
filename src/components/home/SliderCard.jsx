import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SliderCard(props) {
  return (
    <div style={{height: "100%"}}>
      <div className="sliderContent">
        <div className="cardImg">
          <img
            src={props.source}
            alt=""
          />
          <div className="black" />
        </div>
        <div className="cardInfo">
          <h2>{props.place}</h2>
          <Link to="/package">
            <button className="btn">view</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

SliderCard.propType = {
    place: PropTypes.string,
    source: PropTypes.string
  };
