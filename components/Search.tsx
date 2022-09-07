import React from "react";
import { getApi } from "../components/GetAPI";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment } from "@material-ui/core";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export let places = {
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

export function Search() {
  let [inputPlace, setInputPlace] = React.useState("現在地");
  const suggestPlaces = [{ label: "現在地" }, { label: "サポーターズ本社" }];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={suggestPlaces}
      sx={{ width: "80%", height: "20px", m: "auto auto 40px auto" }}
      freeSolo
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          label="どこでデートする？"
          placeholder="東京駅"
          onChange={(event) => setInputPlace(event.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                <InputAdornment position="end">
                  <IconButton onClick={() => (places = getApi(inputPlace))}>
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
