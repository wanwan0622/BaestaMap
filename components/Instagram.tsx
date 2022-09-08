import React from "react";
import { IGEmbed } from "react-ig-embed";
import { PlaceT } from "../components/GetAPI";

export function Instagram(props: { place: PlaceT }) {
  const permalink = props.place.permalink;
  const url = `https://www.instagram.com/p/${permalink}/`;
  return <IGEmbed url={url} />;
}
