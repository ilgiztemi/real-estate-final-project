import React  from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const mapStyle = {
  width: "100%",
  height: "650px",
  marginRight: "20px",
};
const SinglePageMap = ({ center }) => {
  const api_key = process.env.REACT_APP_GOOGLE_MAP_API;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: api_key,
  });
  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={12}>
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(SinglePageMap);