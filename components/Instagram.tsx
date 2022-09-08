/** @format */

import React from "react";
import { IGEmbed } from "react-ig-embed";

export function Instagram(props: { permalink: string }) {
  const url = `https://www.instagram.com/p/${props.permalink}/`;
  return <IGEmbed url={url} />;
}
