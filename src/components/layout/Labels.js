import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";

import ListContainer from "../containers/ListContainer";
import List from "../layout/list/List";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    border: "1px solid black",
    margin: 20
  }
}));

const Labels = () => {
  const classes = useStyles();
  const search = useSelector(state => state.search.search);
  const error = useSelector(state => state.search.error);

  const [value, setValue] = useState("one");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (error !== "no error") {
      setMessage(error);
    } else {
      setMessage("Please initiate a search");
    }
  }, [error]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="full width tabs"
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab value="one" label="Movies" wrapped {...a11yProps("movies")} />
          <Tab value="two" label="Search Results" {...a11yProps("search")} />
          <Tab value="three" label="TV Shows" {...a11yProps("shoes")} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <ListContainer type="movie" />
      </TabPanel>
      <TabPanel value={value} index="two">
        {search.length > 2 ? <List movies={search} /> : <h2>{message}</h2>}
      </TabPanel>
      <TabPanel value={value} index="three">
        <ListContainer type="tv" />
      </TabPanel>
    </div>
  );
};

export default Labels;
