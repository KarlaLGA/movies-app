import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const DropDown = props => {
  const classes = useStyles();
  const categories = props.categories;
  const [option, setOption] = useState("");

  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const inputLabel = useRef(null);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={option}
          labelWidth={labelWidth}
          onChange={e => {
            setOption(e.target.value);
            props.onInputChange(e.target.value);
          }}
        >
          {categories.map((category, index) => (
            <MenuItem value={category.query} key={index}>
              {category.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
