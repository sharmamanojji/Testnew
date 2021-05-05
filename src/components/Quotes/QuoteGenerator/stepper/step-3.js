'use strict'
import React from 'react';
import { Typography } from '@material-ui/core';
import { InputFormField } from '../Application/Input';
import PayMentMethod from '../quoteForm/stepData/paymentMethod';
import DateOfBirth from '../quoteForm/stepData/dateOfBirth';
import { Grid, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Authorization from '../quoteForm/stepData/authorization';

const StepThree = () => {
  const [stateChoose, setStateChoose] = React.useState('');
  const stateHandleChange = event => {
    setStateChoose(event.target.value);
  };
  return (
    <div className="register_first">
      <form autoComplete="off" noValidate>
        <div className="container">
          <div className="row">
            <div className="FormWrapper registerStep1 w-100">
              <Typography component="h2" color="secondary">Contact Information</Typography>
              <form>
                <InputFormField label="First Name" id="firstName" />
                <InputFormField label="Last Name" id="lastName" />
                <DateOfBirth />
                <InputFormField label="Street Address" id="streetaddress" />
                <InputFormField label="City" id="city" />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-select-currency"
                      className="TextFieldWrapper w-100 mt-0"
                      margin="normal"
                      variant="filled"
                      select
                      label="State"
                      value={stateChoose}
                      onChange={stateHandleChange}
                    >
                      {State.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <InputFormField label="Zip Code" id="zipcode" />
                  </Grid>
                </Grid>

                <InputFormField label="Email Address" id="emailaddress" />
                <InputFormField label="Phone Number" id="phonenumber" />
                <Authorization />
                <PayMentMethod />
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default StepThree;


const State = [
  { value: '2020', label: 'California' },
  { value: '2021', label: 'Texas' },
  { value: '2022', label: 'Florida' },
  { value: '2023', label: 'Georgia' }
];