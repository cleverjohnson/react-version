import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "50vh",
};

const center = {
  lat: 48.4333, // Pfarrkirchen latitude
  lng: 12.9333, // Pfarrkirchen longitude
};

const options = {
  styles: [
    {
      "elementType": "geometry",
      "stylers": [{ "color": "#e0e0e0" }],
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#333333" }],
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#ffffff" }, { "weight": 1 }],
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#ffffff" }, { "visibility": "simplified" }],
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#737373" }],
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{ "color": "#739BB4" }],
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#4c74e8" }],
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{ "color": "#c8c8c8" }, { "visibility": "off" }],
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{ "color": "#d0d0d0" }, { "visibility": "off" }],
    },
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#555555" }],
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#b0b0b0" }],
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#757575" }],
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{ "color": "#cccccc" }],
    },
    {
      "featureType": "poi.business",
      "stylers": [{ "visibility": "off" }],
    },
    {
      "featureType": "poi.attraction",
      "stylers": [{ "visibility": "off" }],
    },
    {
      "featureType": "poi.school",
      "stylers": [{ "visibility": "off" }],
    },
    {
      "featureType": "poi.medical",
      "stylers": [{ "visibility": "off" }],
    },
    {
      "featureType": "transit.station",
      "stylers": [{ "visibility": "off" }],
    },
    {
      "featureType": "poi.sports_complex",
      "stylers": [{ "visibility": "off" }],
    },
  ],
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use the environment variable
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      options={options}
    >
      <Marker
        position={center}
        icon={{
          url: "/assets/img/pfarrkirchen.png", // Path relative to the public folder
          scaledSize: new window.google.maps.Size(26, 40), // Adjust the size of the marker
        }}
      />
    </GoogleMap>
  );
};

export default Map;
