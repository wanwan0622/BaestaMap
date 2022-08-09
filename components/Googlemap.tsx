import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const center = {
  lat: 36, // 北緯
  lng: 136, // 東経
};

export function Googlemap() {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY ?? ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}
