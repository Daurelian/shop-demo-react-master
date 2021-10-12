import React,{useContext} from "react";
import { Stack, Paper, Chip } from "@mui/material";
import SearchBar from "./SearchBar";
import { AppContext } from "../../App";

const filters = ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"];

export default function Filters({ selectedFilter, selectFilter }) {
  const {state,dispatch} = useContext(AppContext);
  return (
    <>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        <SearchBar />
      </Stack>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        {/* filters */}
        {state.books.categories?.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            color={state.filters.category === filter ? "secondary" : "primary"}
            onClick={() => dispatch({type:"FilterBook",payload:filter})}
            // {() => selectFilter(filter)}
            // {() => dispatch({type:"FilterBook",payload:filter})}
            variant={state.filters.category === filter ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </>
  );
}
