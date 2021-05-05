"use strict";
import React from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import TextFeild from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  marginBottom:{
      marginBottom: '20px',
  }
}));

const State = [
  { value: "2020", label: "12 MONTHS AAEA- $1,939.05 | $166.59 monthly​" },
  { value: "2021", label: "24 MONTHS AAEA- $1,755.80 | $133.59 monthly​" },
  { value: "2022", label: "36 MONTHS AAEA- $1,339.20 | $111.59 monthly" },
  { value: "2023", label: "12 MONTHS FIXED - $1,489.25 | $122.59 monthly​" },
];

const States = [
  { value: "2020", label: "2.00%​​" },
  { value: "2021", label: "1.00%​​" },
];

const Statesnew = [
  { value: "2020", label: "Monthly" },
  { value: "2021", label: "Annually​​" },
];



const StepOne = () => {
  const classes = styles();
  const [stateChoose, setStateChoose] = React.useState("");
  const stateHandleChange = (event) => {
    setStateChoose(event.target.value);
  };
  const [SelectNewPackage, setSelectNewPackage] = React.useState("");
  const SelectNewPackageChange = (event) => {
    setSelectNewPackage(event.target.value);
  };
  const [ApplyBrokerageFee, setApplyBrokerageFee] = React.useState("");
  const ApplyBrokerageFeeChange = (event) => {
    setApplyBrokerageFee(event.target.value);
  };
  return (
    <div className="register_first">
      <form autoComplete="off" noValidate>
        <div className="container">
          <div className="row">
            <div className="FormWrapper registerStep1 w-100">
              <Typography component="h2" className="stepper-heading">
                Select new plan
              </Typography>
              <p>36 Months AAEA (Current)</p>
              <p>€1,339.20 / €111.59 monthly</p>
              <form>
                <Grid item xs={12}>
                  <TextField
                    id="standard-select-currency"
                    className="TextFieldWrapper w-100 mt-0"
                    margin="normal"
                    variant="filled"
                    select
                    label="Select New Plan"
                    value={stateChoose}
                    onChange={stateHandleChange}
                  >
                    {State.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Typography component="h2" className="stepper-heading mt-4">
                  Apply Brokerage fee
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    id="standard-select-currency"
                    className="TextFieldWrapper w-100 mt-0"
                    margin="normal"
                    variant="filled"
                    select
                    label="Select Broker Fee"
                    value={ApplyBrokerageFee}
                    onChange={ApplyBrokerageFeeChange}
                  >
                    {States.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Typography component="h2" className="stepper-heading mt-4">
                  Rate adjustments
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextFeild
                      className={`w-100 ${classes.marginBottom}`}
                      label="Discount"
                      variant="filled"
                      inputProps={{
                        "aria-label": `Discount`,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-select-currency"
                      className="TextFieldWrapper w-100 mt-0"
                      margin="normal"
                      variant="filled"
                      select
                      label="Frequency"
                      value={SelectNewPackage}
                      onChange={SelectNewPackageChange}
                    >
                      {Statesnew.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </form>
              <h6 className="mt-4 mt-3">Variable Costs</h6>
              <div className="VariableCostContents">
                <span>Delivery Costs Normal</span>
                <span>0.00</span>
              </div>
              <div className="VariableCostContents">
                <span> Delivery Costs Dal</span>
                <span>0.00</span>
              </div>
              <div className="VariableCostContents">
                <span>Taxes (0-10,000 kWh)</span>
                <span>1,260.29</span>
              </div>
              <div className="VariableCostContents mb-2">
                <h6>Subtotal</h6>
                <span>1,260.29</span>
              </div>
              <div className="VariableCostContents mb-2 mt-3">
                <h6>Fixed Costs</h6>
              </div>
              <div className="VariableCostContents mb-2">
                <span>Fixed Delivery Costs</span>
                <span>0.00</span>
              </div>
              <div className="VariableCostContents mb-2">
                <span>Energy Reduction Tax</span>
                <span>-257.54</span>
              </div>
              <div className="VariableCostContents mb-2 pb-3">
                <span>Brokerage Fee</span>
                <span>20.05</span>
              </div>
              <Divider />
              <div className="VariableCostContents mb-2 totalCosts">
                <span>Total</span>
                <span>€1,002.75</span>
              </div>
              <div className="VariableCostContents mb-2">
                <span>Gas Costs</span>
                <span>€1,002.75</span>
              </div>
              <div className="VariableCostContents mb-2">
                <span>Rate Adjustment</span>
                <span>-€20.700</span>
              </div>
              <div className="VariableCostContents mb-2 pb-3">
                <span>Total per year</span>
                <span>€982.75</span>
              </div>
              <div className="VariableCostContents mb-2 pb-3">
                <span>Average per month</span>
                <span>€81.90</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default StepOne;
