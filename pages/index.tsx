import React from "react";

import type { NextPage } from "next";
import Header from "../components/Header";

import { Navigator } from "../components/Navigator";
import { Search } from "../components/Search";
import { SliderView } from "../components/Slider";
import { Googlemap } from "../components/Googlemap";
import { GoogleMap2 } from "../components/GoogleMap2";

import styles from "../styles/Home.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: NextPage = () => {
  const postData = { lat: 35.615304235976, lng: 139.7175761816 };
  type PlacesT = {
    success: boolean;
    posts: {
      hashTagDocsId: string;
      location: {
        lat: number;
        lng: number;
        locationId: number;
        name: string;
      };
      permalink: string;
      timestamp: string;
    }[];
  };
  type PlaceT = {
    hashTagDocsId: string;
    location: {
      lat: number;
      lng: number;
      locationId: number;
      name: string;
    };
    permalink: string;
    timestamp: string;
  };
  let places: PlacesT;
  let place1: PlaceT = {
    hashTagDocsId: "",
    location: {
      lat: 0,
      lng: 0,
      locationId: 0,
      name: "",
    },
    permalink: "",
    timestamp: "",
  };

  fetch("https://baestamap-qpz6p6e7bq-uc.a.run.app", {
    // 送信先URL
    method: "post", // 通信メソッド
    headers: {
      "Content-Type": "application/json", // JSON形式のデータのヘッダー
    },
    body: JSON.stringify(postData), // JSON形式のデータ
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      places = data;
      place1 = data.posts[0];
    });

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
        <SliderView place1={place1.location.name} />
      </main>
    </div>
  );
};

export default Home;
