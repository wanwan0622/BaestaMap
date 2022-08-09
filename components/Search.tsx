import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment } from "@material-ui/core";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const suggestPlaces = [{ label: "現在地" }, { label: "サポーターズ本社" }];

export function Search() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={suggestPlaces}
      sx={{ width: "80%" }}
      freeSolo
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          label="どこでデートする？"
          placeholder="東京駅"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              </>
            ),
          }}
        />
      )}
    />
  );
}
