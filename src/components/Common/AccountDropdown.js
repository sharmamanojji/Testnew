import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },

}));

export default function DropdownMenu() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState('');

  const handleChange = (event) => {
    setSelected(event.target.value)
  };

  return (
    <React.Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="account">Account</InputLabel>
        <Select
          native
          value={selected}
          onChange={handleChange}
          label="Account"
          inputProps={{
            name: "Account",
            id: "account",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>0203926790</option>
          <option value={20}>0203926790</option>
          <option value={30}>0203926790</option>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
