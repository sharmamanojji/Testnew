'use strict'
import React from 'react';
import { Typography } from '@material-ui/core';
import AccountType from './accountType';

import './step.scss';

const StepOne = () => {
  return (
    <div className="register_first">
      <form autoComplete="off" noValidate>
        <div className="container">
          <div className="row">
            <div className="FormWrapper registerStep1 w-100">
              <Typography component="h2" color="secondary">Customer Lookup</Typography>
              <AccountType />
             
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default StepOne;