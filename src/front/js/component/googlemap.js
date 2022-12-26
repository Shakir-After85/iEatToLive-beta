import React, { useState, useEffect, Component } from "react";
import GoogleMapReact from "google-map-react";
import propTypes from "prop-types";

const Map = (props) => {
  let center = {
    lat: props.lat,
    lng: props.lng,
  };

  return (
    <div className="map w-100">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCLFAB6OWwi5dxEvK0fxGC-4jn7DTb29Eg" }}
        defaultCenter={center}
        defaultZoom={props.zoom}
      />
    </div>
  );
};

export default Map;
