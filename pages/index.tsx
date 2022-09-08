import React from "react";

import type { NextPage } from "next";
import Header from "../components/Header";

import { Navigator } from "../components/Navigator";
import { Search } from "../components/Search";
import { SliderView } from "../components/Slider";
import { Googlemap } from "../components/Googlemap";

import styles from "../styles/Home.module.css";
import { PlaceT } from "../components/GetAPI";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: NextPage = () => {
  const [places, setPlaces] = React.useState([] as PlaceT[]);

  return (
    <div style={{ padding: "0 0 0 0" }}>
      <Navigator />
      <Header
        title="Baesta Map"
        description="簡単に近くの映えるデートスポットが探せる"
      />
      <main style={{ margin: "50px 0 0 0" }} className={styles.main}>
        <Search setPlaces={setPlaces} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Googlemap places={places} />
          {/* <GoogleMap2 /> */}
        </div>
        <SliderView places={places} />
      </main>
    </div>
  );
};

export default Home;
