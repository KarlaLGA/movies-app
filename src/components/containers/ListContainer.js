import React, { useState, useEffect } from "react";
import DropDown from "../forms/DropDown";
import { get } from "../../services/api";
import List from "../layout/list/List";

const ListContainer = props => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const type = props.type;

  const handleOptionChange = category => {
    setCategory(category);
  };

  useEffect(() => {
    if (type === "movie") {
      setCategories([
        { query: "popular", text: "Popular" },
        { query: "now_playing", text: "Now Playing" },
        { query: "top_rated", text: "Top Rated" },
        { query: "upcoming", text: "Upcoming" }
      ]);
    } else if (type === "tv") {
      setCategories([
        { query: "popular", text: "Popular" },
        { query: "airing_today", text: "Airing Today" },
        { query: "on_the_air", text: "On the Air" },
        { query: "top_rated", text: "Top Rated" }
      ]);
    }
    setLoading(true);
    get(category, type).then(movies => {
      setMovies(movies);
      setLoading(false);
    });
  }, [category, type]);

  const style = {
    marginTop: "5rem"
  };

  return (
    <div>
      <DropDown onInputChange={handleOptionChange} categories={categories} />
      <div className="content" style={style}>
        {loading ? "Loading" : <List movies={movies} />}
      </div>
    </div>
  );
};

export default ListContainer;
