import React, { Component, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 36, // 北緯
  lng: 136, // 東経
};

const positionMarker = {
  lat: 36,
  lng: 136,
};

export function Googlemap() {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const infoWindowOptions = {
    pixelOffset: size,
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyAnDeddlbLcZsaRzZ2ZmtP_ONVtmVrnKZM"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={positionMarker} />
        <InfoWindow position={positionMarker} options={infoWindowOptions}>
          <div style={{}}>
            <h1>秋葉原オフィス</h1>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
}
