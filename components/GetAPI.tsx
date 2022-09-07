import React from "react";

// import { inputPlace } from "../components/Search";

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

let lat: number;
let lng: number;

function getLocation() {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function successCallback(position: {
  coords: { latitude: number; longitude: number };
}) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
}

function errorCallback(error: any) {
  alert("現在地が取得できませんでした");
}

export async function getApi(inputPlace: string) {
  let places = {
    success: false,
    post: {
      hashTagDocsId: "",
      location: {
        lat: 0,
        lng: 0,
        locationId: 0,
        name: "",
      },
      permalink: "",
      timestamp: "",
    },
  };

  if (inputPlace == "現在地") {
    // 現在地の緯度経度を取得
    getLocation();

    // 緯度経度からPlacesを取得
    let postData = { lat: lat, lng: lng };
    console.log("現在地");
    console.log(postData); // OK!

    await fetch("https://baestamap-qpz6p6e7bq-uc.a.run.app", {
      // 送信先URL
      method: "post", // 通信メソッド
      headers: {
        "Content-Type": "application/json", // JSON形式のデータのヘッダー
      },
      body: JSON.stringify(postData), // JSON形式のデータ
    })
      .then((response) => response.json())
      .then((data) => {
        places = data;
      });
  } else {
    // 地名からPlacesを取得
    let postData = { query: inputPlace };
    await fetch("https://baestamap-query-qpz6p6e7bq-uc.a.run.app", {
      // 送信先URL
      method: "post", // 通信メソッド
      headers: {
        "Content-Type": "application/json", // JSON形式のデータのヘッダー
      },
      body: JSON.stringify(postData), // JSON形式のデータ
    })
      .then((response) => response.json())
      .then((data) => {
        places = data;
      });
  }

  console.log(places);
  return places;
}
