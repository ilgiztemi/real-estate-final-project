import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useAdds } from "../context/AddsContext";
import Tooltip from "@material-ui/core/Tooltip";

const mapStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 45.458565,
  lng: -73.665305,
};

const Map = () => {
  const {
    state: { adds },
  } = useAdds();
  const api_key = process.env.REACT_APP_GOOGLE_MAP_API;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: api_key,
  });
  //this renders multiple locations of adds dynamically based on the data that is coming from mongoDV
  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={11}>
      {adds.map((el) => (
        <Tooltip title={el.street}>
          <Marker position={el.center}></Marker>
        </Tooltip>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
