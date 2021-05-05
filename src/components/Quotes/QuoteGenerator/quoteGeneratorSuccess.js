import React, { useState } from 'react';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import Success from '../../../assets/images/success.svg';
import './stepper/step.scss';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import packageImg from '../../../assets/images/packageImg.svg';
import Link from '@material-ui/core/Link';
import CostSpecification from './costSpecfication';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const QuoteGeneratorSuccess = () => {
  const [modalopen,setModalopen] = useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setModalopen(true);
  };
  const handleClickClose = (data) => {
    setModalopen(data);
  };
  const NavContract = () => {
    window.location.hash = "/";
  }
  return (
    <Container className='quote-module quoteGenSucess'>
      <Grid container className="quote-module__form success-module">
        <Grid component="div" className="success-section border-0">
          <img src={Success} alt="success" />
          <Typography component="h4">Success!</Typography>
          <div className="successborder">
            <p>
              Thank you! You have successfully generated a quote. The customer will receive an email with this quote shortly.
            </p>
          </div>
        </Grid>


        <Grid component="div" className="success-roundBorder">
          <h3>Quote ID: 2442112020AS</h3>

          <div className="round-content">
            <Grid container spacing={3}>
              <Grid item xs={12} className="active">
                <Paper className={classes.paper + ' paperCustom'} onClick={handleClickOpen}>
                  <img src={packageImg} alt="package image" />
                  <h2>36 Months AAEA</h2>
                  <p>Descriptive text about this contract type lorem ipsum Phasellus a
                  pellentesque nisl.
                  Descriptive text about this contract type lorem ipsum Phasellus a
                pellentesque nisl.</p>
                  <Typography component="h4" color="secondary">€1,339.20</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Typography component="h2" color="secondary">Customer Information</Typography>
            <card className="data-label">
              <h4>Johnathan Doe</h4>
              <p>1234 Doe Street Utility, CO 12345</p>
              <p>jonathan.doe@address.com</p>
              <p>(888) 888-8888</p>
            </card>

            <Typography component="h2" color="secondary">Service & plan details</Typography>
            <card className="data-label">
              <h4>36 MONTHS AAEA - €1,339.20</h4>
              <p>Service Type: Gas</p>
              <p>Start Date: 07/24/2021</p>
              <p>(888) 888-8888</p>
            </card>


            <div className="variableCost">
              <Typography component="h2" color="secondary">Variable Costs</Typography>
              <ul>
                <li><label>Delivery Costs Normal</label> <span>0.00</span></li>
                <li><label> Delivery Costs Dal</label> <span> 0.00 </span></li>
                <li><label> Taxes (0-10,000 kWh) </label> <span> 575.89 </span> </li>
                <li><label> <strong>Subtotal</strong> </label> <span><strong>575.89</strong>  </span> </li>
              </ul>
            </div>

            <div className="variableCost">
              <Typography component="h2" color="secondary">Fixed Costs</Typography>
              <ul>
                <li><label>Fixed Delivery Costs</label> <span>0.00</span></li>
                <li><label> Energy Reduction Tax </label> <span>-257.54 </span></li>
                <li className="border-bottom"><label> Network Management Costs </label> <span> 172.09 </span> </li>
                <li className="boldData">
                  <Typography component="label" color="secondary">TOTAL</Typography>
                  <Typography component="label" color="secondary">€1,339.20</Typography>
                </li>

                <li><label> Gas Costs </label> <span> €1,339.20 </span> </li>
                <li><label> Total per year </label> <span> €1,339.20 </span> </li>
                <li><label> Average per month </label> <span> €111.59 </span> </li>
              </ul>
            </div>

            <div className="whatsnext">
            <Typography component="h2" color="secondary">What’s next?</Typography>
              <p>Lacus dignissim hendrerit tristique cursus ultrices mus feugiat tellus imperdiet, senectus quis natoque eleifend.</p>
            </div>

            <div className="button-group">
              <Button component={Link} to="/" color="primary">
              Start another quote
            </Button>
              <Button component={Link} to="/" variant="contained" color="primary" onClick={NavContract}>
                go to homepage
            </Button>
            </div>


            <CostSpecification Parentmodalopen={modalopen} handleClickClose={handleClickClose}/>

          </div>
        </Grid>
      </Grid>
    </Container>
  )
}




export default QuoteGeneratorSuccess;
