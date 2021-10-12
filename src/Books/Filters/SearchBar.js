import React, { useContext } from "react";
import { Input, InputLabel, InputAdornment, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../../App";

export default function SearchBar() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <FormControl variant="standard" className="custom-input">
      <InputLabel htmlFor="input-with-icon-adornment">Search a book</InputLabel>
      <Input
        id="input-with-icon-adornment"
        name="name"
        onChange={(event) =>
          dispatch({ type: "Search", payload: event.target.value })
        }
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
