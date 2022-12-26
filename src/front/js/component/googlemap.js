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
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            },
          ]);
        }}
        bootstrapURLKeys={{ key: "AIzaSyCa1yoVQ6mqB2kjzQ8zYVmTE2nXL78_W0M" }}
        defaultCenter={center}
        defaultZoom={props.zoom}
      />
    </div>
  );
};

export default Map;
