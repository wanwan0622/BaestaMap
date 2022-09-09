/** @format */

import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { PlaceT } from "../components/GetAPI";

export function Instagram(props: { place: PlaceT }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url={`https://www.instagram.com/p/${props.place.permalink}/`}
        width={328}
        key={props.place.permalink}
      />
    </div>
  );
}
