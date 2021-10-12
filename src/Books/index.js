import React, { useState,useContext} from "react";
import { Container, Grid } from "@mui/material";
import booksMock from "../mocks/books";
import Book from "./Book";
import Filters from "./Filters";
import { AppContext } from "../App";

export default function Books() {
  
 
  const {state,dispatch} = useContext(AppContext);


  return (
    <Container fixed sx={{ mt: 4 }}>
      <Filters  />
      <Grid container spacing={2}>
        {state.books.filteredBooks?.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </Grid>
    </Container>
  );
}
