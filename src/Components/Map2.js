import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { ReactDOM, useRef, useEffect, useState } from "react";
import "../CSS/Map2.css";
import "../Resources/fdmstar.png";
import "/node_modules/mapbox-gl/src/css/mapbox-gl.css";
import location from "../Resources/locations.json";
import Link from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { createContext } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHVuZ3J5YmVudG8iLCJhIjoiY2w0eHd1ZmxjMDRtZzNicDhwbTN5cWhqbCJ9.G8bmH2S7dfzSMBC06UCpPw";

const Map2 = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [15, 20],
      zoom: 2,
      minZoom: 1,
      maxZoom: 20,
    });

    // Create default markers
    location.location.map((feature) =>
      new mapboxgl.Marker()
        .setLngLat(feature.geometry.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(feature.message))
        .addTo(map)
    );

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />;
    </>
  );
};

export default Map2;
