import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  List,
  ListItem,
  Avatar,
  Grid,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";


const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    border: "none",
  },
  control: {
    padding: theme.spacing(2),
  },
  formgroup: {
    flexDirection: "column",
    display: "inline-block",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
});

class StepTwo extends React.Component {
  handleClick = (event) => {
    this.setState({ showdiv: true });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="rows stepTwo">
        <div className="register_first">
          <form className={classes.root} autoComplete="off">
            <div className="container w-100">
              <div className="row">
                <div className="step-2 w-100">
                  <Typography component="h2" className="stepper-heading">
                    Contact information
                  </Typography>
                  <List className="ReviewTxtList">
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">account_circle</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt">
                          Customer Name
                        </Typography>
                        <Typography component="p" className="secondarytxt">
                          Jonathan Doe
                        </Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">account_box</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt">
                          Account Number
                        </Typography>
                        <Typography component="p" className="secondarytxt">
                          1234 Doe Street Utility, CO 12345
                        </Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">attach_money</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt">
                          Email Address
                        </Typography>
                        <Typography component="p" className="secondarytxt">
                          jonathan.doe@address.com
                        </Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">email</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt">
                          Phone Number
                        </Typography>
                        <Typography component="p" className="secondarytxt">
                          (888) 888-8888
                        </Typography>
                      </Grid>
                    </ListItem>
                  </List>

                  <Typography component="h2" className="stepper-heading mt-5">
                    package details
                  </Typography>
                  <List className="ReviewTxtList">
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">location_on</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt">
                          New Package Type
                        </Typography>
                        <Typography component="p" className="secondarytxt">
                          48 Month Fixed
                        </Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">location_on</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt">
                          Package Price
                        </Typography>
                        <Typography component="p" className="secondarytxt">
                        €1,002.75
                        </Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Avatar className="bgcommon">
                        <i class="material-icons">attach_money</i>
                      </Avatar>
                      <Grid component="div" className="ReviewTxt">
                        <Typography component="h3" className="Primarytxt">
                          Broker Fee
                        </Typography>
                        <Typography component="p" className="secondarytxt">
                          2.00%
                        </Typography>
                      </Grid>
                    </ListItem>
                  </List>
                  <div className="w-100">
                    <IAgreeTo />
                  </div>
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
    <FormControlLabel
      className="iagree"
      control={
        <Checkbox checked={checked} onChange={handleChange} value="emailVal" />
      }
      label={
        <span>
          I agree to the{" "}
          <Link to="/" color="secondary">
            Terms &amp; Conditions
          </Link>
        </span>
      }
    />
  );
};

const jsonData = [
  {
    label: "User name",
    labelvalue: "JoeDoe",
    icon: "account_circle",
    edit: false,
  },
  {
    label: "Mobile Phone",
    labelvalue: "(123) 456-7890",
    icon: "stay_current_portrait",
    edit: false,
  },
  {
    label: "Home Phone",
    labelvalue: "(123) 456-7890",
    icon: "call",
    edit: false,
  },
  {
    label: "Email Address",
    labelvalue: "joe.doe@address.com",
    icon: "email",
    edit: false,
  },
];
