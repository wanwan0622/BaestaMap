/** @format */

import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { PlaceT, CoordT } from "../components/GetAPI";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export function Googlemap(props: {
  places: PlaceT[];
  inputPlace: string;
  center: CoordT;
}) {
  return (
    <LoadScript googleMapsApiKey={"AIzaSyD0YxWS2l_jq0TWTNYAaNv-e7IZ1ILLAVQ"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={12}
        options={options}
      >
        {props.places.map((place: PlaceT, idx: number) => {
          return (
            <MarkerF
              key={idx}
              position={{
                lat: place.location.lat,
                lng: place.location.lng,
              }}
              label={(idx + 1).toString()}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}
