import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    width: 1000
  },
  media: {
    width: "30%"
  },
  title: {
    fontSize: 14
  },
  details: {
    width: "70%"
  }
});

const Item = props => {
  let item = props.item;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.media}
          image={
            `https://image.tmdb.org/t/p/w500/${item.poster_path}` ||
            `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
          }
          component="img"
        />
        <div className={classes.details}>
          <CardHeader title={item.title || item.name} />
          <CardContent>
            <Typography className={classes.title}>
              Release Date: {item.release_date || item.first_air_date} |
              Popularity {item.popularity}
            </Typography>
            <Typography>{item.overview}</Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Item;
