import React from "react";
import Container from "@material-ui/core/Container";

import Item from "./Item";

const List = props => {
  const movies = props.movies;

  return (
    <Container>
      {movies.map(movie => (
        <Item item={movie} key={movie.id} />
      ))}
    </Container>
  );
};

export default List;
