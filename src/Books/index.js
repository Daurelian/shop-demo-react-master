import React, { useState,useContext} from "react";
import { Container, Grid } from "@mui/material";
import booksMock from "../mocks/books";
import Book from "./Book";
import Filters from "./Filters";
import { AppContext } from "../App";

export default function Books() {
  const [books, setBooks] = useState(booksMock);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const {state,dispatch} = useContext(AppContext);

  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setBooks(
      filter === "All"
        ? booksMock
        : booksMock.filter((book) => book.category === filter)
    );
  };

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Filters selectedFilter={selectedFilter} selectFilter={selectFilter} />
      <Grid container spacing={2}>
        {state.books.filteredBooks?.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </Grid>
    </Container>
  );
}
