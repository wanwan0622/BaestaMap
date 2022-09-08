import React, { Component, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { PlaceT, CoordT, getLocation } from "../components/GetAPI";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

let center: CoordT = {
  lat: 35.68, // 北緯
  lng: 139.76, // 東経
};

type LocApiT = {
  success: boolean;
  location: CoordT;
};

async function getLocationApi(inputPlace: string) {
  fetch("https://baestamap-location-qpz6p6e7bq-uc.a.run.app", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputPlace),
  })
    .then((response) => response.json())
    .then((data: LocApiT) => {
      if (data.success) {
        center = data.location;
      } else {
        console.error("APIの取得に失敗しました");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function Googlemap(props: { places: PlaceT[]; inputPlace: string }) {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const infoWindowOptions = {
    pixelOffset: size,
  };

  if (props.inputPlace === "現在地") {
    center = await getLocation();
  } else {
    await getLocationApi(props.inputPlace);
  }

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
