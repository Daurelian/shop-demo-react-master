import React, { useContext } from "react";
import { Stack, Paper, Chip } from "@mui/material";
import SearchBar from "./SearchBar";
import { AppContext } from "../../App";

export default function Filters() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <>
      <Stack direction="row" spacing={2} sx={{ my: 5 }}>
        <SearchBar />
      </Stack>
      <Stack direction="row" spacing={2} sx={{ my: 5 }}>
        {state.books.categories?.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            color={state.filters.category === filter ? "secondary" : "primary"}
            // onClick={() => dispatch({ type: "FilterBook", payload: filter })}
            onClick={() => dispatch({ type: "Merge", payload: {filter, value:""} })}
            variant={state.filters.category === filter ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </>
  );
}
