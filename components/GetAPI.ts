/** @format */

type CoordT = { lat?: number; lng?: number };

type LocationT = {
  locationId: number;
  name: string;
} & CoordT;

export type PlaceT = {
  hashTagDocsId: string;
  location: LocationT;
  permalink: string;
  timestamp: string;
};

export type APIResT = {
  success: boolean;
  posts: PlaceT[];
};

async function getLocation() {
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, () => {
        reject();
        alert("現在地が取得できませんでした");
      });
    });
  };
  const position = (await getCurrentPosition()) as GeolocationPosition;
  const coord: CoordT = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  return coord;
}

export async function getApi(inputPlace: string) {
  let places = [] as PlaceT[];
  console.log("inputPlace", inputPlace);
  if (inputPlace === "現在地") {
    // 現在地の緯度経度を取得
    const coord: CoordT = await getLocation();

    // 緯度経度からPlacesを取得
    console.log("現在");
    console.log(coord); // OK!
    if (typeof coord.lat === "undefined" && typeof coord.lng === "undefined") {
      return [] as PlaceT[];
    }
    await fetch("https://baestamap-qpz6p6e7bq-uc.a.run.app", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coord),
    })
      .then((response) => response.json())
      .then((data: APIResT) => {
        if (data.success) {
          places = data.posts;
        } else {
          console.error("APIの取得に失敗しました");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    // 地名からPlacesを取得
    const postData = { query: inputPlace };
    await fetch("https://baestamap-query-qpz6p6e7bq-uc.a.run.app", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data: APIResT) => {
        if (data.success) {
          places = data.posts;
        } else {
          console.error("APIの取得に失敗しました");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  console.log(places);
  return places;
}
