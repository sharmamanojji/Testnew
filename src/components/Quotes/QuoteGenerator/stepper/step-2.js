'use strict'
import React from 'react';
import { Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import DatePicker from './datePicker';
import BrokerFee from '../quoteForm/brokerFee';
import SelectPackage from '../quoteForm/selectPackage';
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    width:'100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const StepTwo = (props) => {
  const classes = useStyles();
  const [serviceType, setServiceType] = React.useState('');
  const handleChange = (event) => {
    setServiceType(event.target.value);
  };
  return (
    <div className="register_first">
      <form autoComplete="off" noValidate>
        <div className="container">
          <div className="row">
            <div className="FormWrapper registerStep2 w-100">
              <Typography component="h2" color="secondary">Select start date</Typography>
              <form>
                {/* <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">Service Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={serviceType}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Gas</MenuItem>
                    <MenuItem value={20}>Electric</MenuItem>
                  </Select>
                </FormControl> */}
                <DatePicker />
                <SelectPackage />
                <BrokerFee />
                {/* <InputFormField label="Username or Email Address" id="useremail" />
                <small className="hintTxt">Create your username. If you like, you can use your email address as your username.</small>
                <SteptwoField label="Create Password" />
                <SteptwoField label="Confirm Password" /> */}
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StepTwo;