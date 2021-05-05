import React from 'react';
import Typography from '@material-ui/core/Typography';
import MultiStep from './Multi';
import { steps } from './stepper/stepmain';
import './stepper.scss';

class Stepper extends React.Component {
    render() {
        return (
          <div className="containerWrapper">
               <Typography color="primary" component="h3" className="titlehead">new quote</Typography>
              <MultiStep steps={steps}/>
          </div>
        )
              }
}

export default Stepper;
