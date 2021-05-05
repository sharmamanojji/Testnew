import React from "react";
import { Link } from 'react-router-dom';
import Heighchart from "./Chart/Heighchart";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GuageChart from './EfficiencyjsChart';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    boxShadow: 'none',
    border: 'solid 1px #dbdbdb'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex',
    flexDirection: 'row-reverse',
   
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '6px 10px'
  },
}));

function QuoteConversionRate() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <h2 className="dashboard-heading">Quote conversion rate (YTD)</h2>
      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <Paper className={classes.paper}>
          <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          
          <MenuItem value="">Jan 2019 - Jan 2020</MenuItem>
          <MenuItem value={20}>Jan 2018 - Jan 2019</MenuItem>
          <MenuItem value={30}>Jan 2017 - Jan 2018</MenuItem>
        </Select>
      </FormControl>
            <Heighchart />
          </Paper>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Paper className={classes.paper}>
            <GuageChart />
            <div className="QuoteConversionRate-right">
              <span class="material-icons info-icon">info</span>
              <div>
                <h6>Conversion</h6>
                <p>Vitae donec rhoncus orci malesuada amet accumsan</p>
                <Link to="#">View details</Link>
              </div>
            </div>
            <div className="QuoteConversionRate-right">
              <span class="material-icons warning-icon">warning</span>
              <div>
                <h6>proposals</h6>
                <p>Lorem tincidunt suspendisse sit libero id tortor cursus</p>
                <Link to="#">Learn more</Link>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default QuoteConversionRate;
