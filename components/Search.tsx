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
}) {
  const [inputPlace, setInputPlace] = React.useState("現在地");
  const suggestPlaces = [{ label: "現在地" }, { label: "サポーターズ本社" }];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={suggestPlaces}
      sx={{ width: "80%", height: "20px", m: "auto auto 40px auto" }}
      freeSolo
      disableClearable
      onInputChange={(_, newInputValue) => setInputPlace(newInputValue)}
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
                  <IconButton
                    onClick={async () => {
                      const places: PlaceT[] = await getApi(inputPlace);
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
