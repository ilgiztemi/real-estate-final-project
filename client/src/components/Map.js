import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useAdds } from "../context/AddsContext";

const mapStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
    lat: 45.458565,
    lng: -73.665305
}

const  Map = () => {
  const {state: {adds}} = useAdds();  
  const api_key = process.env.REACT_APP_GOOGLE_MAP_API;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: api_key,
  });
  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={11}>
      {/* Child components, such as markers, info windows, etc. */}
      {
        adds.map(el => (
            <Marker position={el.center}></Marker>
        ))
      }
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
