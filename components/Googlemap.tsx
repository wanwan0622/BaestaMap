import React, { Component, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { PlaceT } from "../components/GetAPI";

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

export function Googlemap(props: { places: PlaceT[] }) {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const infoWindowOptions = {
    pixelOffset: size,
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyD0YxWS2l_jq0TWTNYAaNv-e7IZ1ILLAVQ"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        {props.places.map((place: PlaceT, idx: number) => {
          return (
            <MarkerF
              key={idx}
              position={{
                lat: props.places[idx].location.lat,
                lng: props.places[idx].location.lng,
              }}
              label={(idx + 1).toString()}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}
