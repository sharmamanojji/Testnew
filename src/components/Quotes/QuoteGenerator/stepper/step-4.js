import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, List, ListItem, Avatar, Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import SignatureRequired from '../quoteForm/stepData/signatureRequired'; 

import './step.scss';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    border: 'none',
  },
  control: {
    padding: theme.spacing(2)
  },
  formgroup: {
    flexDirection: 'column',
    display: 'inline-block',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
});

class StepTwo extends React.Component {


  handleClick = event => {
    this.setState({ showdiv: true });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ value: event.target.value });
  };

  handleChangeNew = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChangeNEW = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleClickShowConfirmPassword = () => {
    this.setState(state => ({ showConfirmPassword: !state.showConfirmPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className='rows stepFour'>
        <div className="register_first">
          <form className={classes.root} autoComplete="off">
            <div className="container w-100">
              <div className="row">
                <div className="step-2 w-100"> 
                <Typography component="h2" color="primary">Service Details</Typography>
                  <List className="ReviewTxtList">
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">home</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Service Type </Typography>
                        <Typography component="p" className="secondarytxt">Gas</Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">place</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Desired Gas  Start Date </Typography>
                        <Typography component="p" className="secondarytxt">7/24/2021</Typography>
                      </Grid>
                    </ListItem>
                  </List>



                  <Typography component="h2" color="primary">Plan details</Typography>
                  <List className="ReviewTxtList">
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">home</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Plan Type </Typography>
                        <Typography component="p" className="secondarytxt">36 Months AAEA</Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">place</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Plan Price </Typography>
                        <Typography component="p" className="secondarytxt">€1,339.20</Typography>
                      </Grid>
                    </ListItem>

                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">attach_money</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Broker Fee </Typography>
                        <Typography component="p" className="secondarytxt">1.75%</Typography>
                      </Grid>
                    </ListItem>
                  </List>


                  <Typography component="h2" color="primary">Contact information</Typography>
                  <List className="ReviewTxtList">
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">account_circle</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Customer Name </Typography>
                        <Typography component="p" className="secondarytxt"> Jonathan Doe </Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">place</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Date of Birth </Typography>
                        <Typography component="p" className="secondarytxt">08/08/1988</Typography>
                      </Grid>
                    </ListItem>

                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">attach_money</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Street Address </Typography>
                        <Typography component="p" className="secondarytxt">1234 Doe Street Utility, CO 12345</Typography>
                      </Grid>
                    </ListItem>

                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">mail</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Email Address </Typography>
                        <Typography component="p" className="secondarytxt">jonathan.doe@address.com</Typography>
                      </Grid>
                    </ListItem>

                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">call</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Phone Number </Typography>
                        <Typography component="p" className="secondarytxt">(888) 888-8888</Typography>
                      </Grid>
                    </ListItem>

                  </List>




                  <Typography component="h2" color="primary">Payment Details</Typography>
                  <List className="ReviewTxtList">
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">account_circle</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Bank Name </Typography>
                        <Typography component="p" className="secondarytxt"> Wells Fargo Bank </Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">attach_money</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Total Amount </Typography>
                        <Typography component="p" className="secondarytxt">€1,339.20</Typography>
                      </Grid>
                    </ListItem>

                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">event</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Payment Date </Typography>
                        <Typography component="p" className="secondarytxt">Today ( Aug 14, 2019)</Typography>
                      </Grid>
                    </ListItem>

                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">account_balance</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt"> Bank Account </Typography>
                        <Typography component="p" className="secondarytxt">BofU - 1211</Typography>
                      </Grid>
                    </ListItem>
                  </List>


                  <div className="w-100">
                    <IAgreeTo />
                  </div>
                  <SignatureRequired />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

StepTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepTwo);




const IAgreeTo = () => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel className="iagree"
      control={<Checkbox checked={checked} onChange={handleChange} value="emailVal" />}
      label={<span>I agree to the <Link to="/" color="secondary">Terms &amp; Conditions</Link></span>}
    />
  )
}

const jsonData = [
  { label: 'User name', labelvalue: 'JoeDoe', icon: 'account_circle', edit: false },
  { label: 'Mobile Phone', labelvalue: '(123) 456-7890', icon: 'stay_current_portrait', edit: false },
  { label: 'Home Phone', labelvalue: '(123) 456-7890', icon: 'call', edit: false },
  { label: 'Email Address', labelvalue: 'joe.doe@address.com', icon: 'email', edit: false },
]