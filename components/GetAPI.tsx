import React from "react";

// import { inputPlace } from "../components/Search";

class LocationT {
  lat: number;
  lng: number;
  locationId: number;
  name: string;

  constructor() {
    this.lat = 0;
    this.lng = 0;
    this.locationId = 0;
    this.name = "";
  }
}

class PostsT {
  hashTagDocsId: string;
  location: LocationT;
  permalink: string;
  timestamp: string;

  constructor() {
    this.hashTagDocsId = "";
    this.location = new LocationT();
    this.permalink = "";
    this.timestamp = "";
  }
}

export class PlacesT {
  success: boolean;
  posts: PostsT[];

  constructor() {
    this.success = false;
    this.posts = [];
  }
}

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

export function getApi(inputPlace: string) {
  let places: PlacesT = new PlacesT();

  if (inputPlace == "現在地") {
    // 現在地の緯度経度を取得
    getLocation();

    // 緯度経度からPlacesを取得
    let postData = { lat: lat, lng: lng };
    console.log("現在");
    console.log(postData); // OK!

    // places.success = false;
    // places.posts.push({
    //   hashTagDocsId: "",
    //   location: {
    //     lat: 1,
    //     lng: 1,
    //     locationId: 0,
    //     name: "aa",
    //   },
    //   permalink: "",
    //   timestamp: "20220909"
    // })
    // console.log(places);

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
        places = data;
      });
  } else {
    // 地名からPlacesを取得
    let postData = { query: inputPlace };
    fetch("https://baestamap-query-qpz6p6e7bq-uc.a.run.app", {
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
