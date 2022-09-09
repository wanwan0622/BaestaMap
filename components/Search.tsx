/** @format */

import React from "react";
import { getApi, PlaceT, CoordT, getLocation } from "../components/GetAPI";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export function Search(props: {
  setPlaces: React.Dispatch<React.SetStateAction<PlaceT[]>>;
  inputPlace: string;
  setInputPlace: React.Dispatch<React.SetStateAction<string>>;
  setCenter: React.Dispatch<React.SetStateAction<CoordT>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const suggestPlaces = [{ label: "現在地" }, { label: "サポーターズ本社" }];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={suggestPlaces}
      sx={{ width: "80%", height: "20px", m: "auto auto 40px auto" }}
      freeSolo
      disableClearable
      onInputChange={(_, newInputValue) => props.setInputPlace(newInputValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="どこでデートする？"
          placeholder="東京駅"
          onChange={(event) => props.setInputPlace(event.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                <InputAdornment position="end">
                  <IconButton
                    onClick={async () => {
                      props.setIsLoading(true);
                      const places: PlaceT[] = await getApi(props.inputPlace);
                      const center = await getCenter(props.inputPlace);
                      props.setPlaces(places);
                      if (typeof center !== "undefined") {
                        props.setCenter(center);
                      }
                      props.setIsLoading(false);
                    }}
                  >
                    <SearchIcon sx={{ color: "#FA45FA", fontSize: "large" }} />
                  </IconButton>
                </InputAdornment>
              </>
            ),
          }}
        />
      )}
    />
  );
}

type LocApiT = {
  success: boolean;
  location?: CoordT;
};

async function getLocationApi(inputPlace: string): Promise<CoordT | undefined> {
  let center: CoordT | undefined = undefined;
  const postData = { query: inputPlace };
  await fetch("https://baestamap-location-qpz6p6e7bq-uc.a.run.app", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data: LocApiT) => {
      if (data.success) {
        center = data.location;
      } else {
        console.error("APIの取得に失敗しました");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return center;
}

async function getCenter(inputPlace: string) {
  if (inputPlace === "現在地") {
    return await getLocation();
  } else {
    return await getLocationApi(inputPlace);
  }
}
