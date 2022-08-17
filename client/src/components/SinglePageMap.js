import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const mapStyle = {
  width: "100%",
  height: "650px",
  maxWidth: "800px",
  marginRight: "20px",
};
//this component show location of the selected add dynamically on google map
const SinglePageMap = ({ center }) => {
  const api_key = process.env.REACT_APP_GOOGLE_MAP_API;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: api_key,
  });
  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={12}>
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(SinglePageMap);
