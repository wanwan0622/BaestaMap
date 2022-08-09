import React from "react";

import type { NextPage } from "next";
import Header from "../components/Header";

import { Navigator } from "../components/Navigator";
import { Search } from "../components/Search";
import { Hint } from "../components/Hint";
import { SliderView } from "../components/Slider";

import styles from "../styles/Home.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navigator />
      <Header
        title="Baesta Map"
        description="簡単に近くの映えるデートスポットが探せる"
      />
      <main className={styles.main}>
        <span>どこでデートする？</span>
        <Hint />

        <Search />
        <p>地図入れる</p>
        <div></div>
        <SliderView />
      </main>
    </div>
  );
};

export default Home;
