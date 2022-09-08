/** @format */

import React from "react";
import { getApi, PlaceT } from "../components/GetAPI";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export function Search(props: {
  setPlaces: React.Dispatch<React.SetStateAction<PlaceT[]>>;
  inputPlace: string;
  setInputPlace: React.Dispatch<React.SetStateAction<string>>;
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
                      const places: PlaceT[] = await getApi(props.inputPlace);
                      props.setPlaces(places);
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
