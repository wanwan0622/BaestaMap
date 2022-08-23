import React from "react";

import type { NextPage } from "next";
import Header from "../components/Header";

import { Navigator } from "../components/Navigator";
import { Search } from "../components/Search";
import { SliderView } from "../components/Slider";
import { Googlemap } from "../components/Googlemap";

import styles from "../styles/Home.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const postData = { lat: 35.615304235976, lng: 139.7175761816 };

fetch("https://us-central1-baestamap.cloudfunctions.net/baestamap", {
  // 送信先URL
  method: "post", // 通信メソッド
  headers: {
    "Content-Type": "application/json", // JSON形式のデータのヘッダー
  },
  body: JSON.stringify(postData), // JSON形式のデータ
})
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  });

const Home: NextPage = () => {
  return (
    <div style={{ padding: "0 0 0 0" }}>
      <Navigator />
      <Header
        title="Baesta Map"
        description="簡単に近くの映えるデートスポットが探せる"
      />
      <main style={{ margin: "50px 0 0 0" }} className={styles.main}>
        <Search />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Googlemap />
        </div>
        <div></div>
        <SliderView />
      </main>
    </div>
  );
};

export default Home;
