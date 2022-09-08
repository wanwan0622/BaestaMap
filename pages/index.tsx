/** @format */

import React from "react";

import type { NextPage } from "next";
import Header from "../components/Header";

import { Navigator } from "../components/Navigator";
import { Search } from "../components/Search";
import { SliderView } from "../components/Slider";
import { Googlemap } from "../components/Googlemap";

import styles from "../styles/Home.module.css";
import { PlaceT, CoordT } from "../components/GetAPI";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: NextPage = () => {
  const [places, setPlaces] = React.useState([] as PlaceT[]);
  const [inputPlace, setInputPlace] = React.useState("現在地");
  const [center, setCenter] = React.useState<CoordT>({
    lat: 35.68,
    lng: 139.76,
  } as CoordT);
  return (
    <div style={{ padding: "0" }}>
      <Navigator />
      <Header
        title="Baesta Map"
        description="簡単に近くの映えるデートスポットが探せる"
      />
      <main style={{ margin: "50px 0 0 0" }} className={styles.main}>
        <Search
          setPlaces={setPlaces}
          inputPlace={inputPlace}
          setInputPlace={setInputPlace}
          setCenter={setCenter}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Googlemap places={places} inputPlace={inputPlace} center={center} />
        </div>
        <SliderView places={places} />
      </main>
    </div>
  );
};

export default Home;
