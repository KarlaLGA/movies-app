import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Search from "../forms/Search";
import Dropdown from "../forms/DropDown";
import { search } from "../../services/api";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const FormContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialSearch = {
    query: "",
    category: "multi"
  };

  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const categories = [
    { query: "multi", text: "Multi" },
    { query: "tv", text: "TV Shows" },
    { query: "movie", text: "Movies" }
  ];

  const handleTextChange = query => {
    setSearchQuery({ ...searchQuery, query: query });
  };

  const handleOptionChange = category => {
    setSearchQuery({ ...searchQuery, category: category });
  };

  const handleSearch = e => {
    e.preventDefault();
    search(searchQuery.category, searchQuery.query)
      .then(data => {
        console.log(data);

        if (data.length === 0) {
          dispatch({
            type: "SET_ERROR",
            payload: "Sorry, there were no results"
          });
        } else {
          dispatch({ type: "SET_SEARCH", payload: data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const styleSearch = {
    display: "flex",
    width: "70%",
    justifyContent: "space-between",
    margin: "auto",
    alignItems: "center",
    marginTop: "5rem",
    marginBottom: "5rem"
  };
  return (
    <div style={styleSearch}>
      <Search onTextChange={handleTextChange} />
      <Dropdown onInputChange={handleOptionChange} categories={categories} />
      <div className={classes.root}>
        <Button variant="contained" onClick={handleSearch} color="primary">
          Search
        </Button>
      </div>
    </div>
  );
};

export default FormContainer;
