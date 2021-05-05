import React from "react";
import { Container, Row, Col } from "reactstrap";
import DropdownMenu from "../Common/AccountDropdown";
import "./NotificationPreferences.scss";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const theme = createMuiTheme({
  shadows: ["none"],
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    marginBottom: "20px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function NotificationPreferences() {
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
  });

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [day, setDay] = React.useState("");

  const handleChange = (event) => {
    setDay(event.target.value);
  };

  const [openDialogTermsAndC, setOpenopenDialogTermsAndC] = React.useState(
    false
  );

  const DialogTermsAndCOpen = () => {
    setOpenopenDialogTermsAndC(true);
  };

  const DialogTermsAndCClose = () => {
    setOpenopenDialogTermsAndC(false);
  };
  return (
    <React.Fragment>
      <div className="dashboard">
        <Container>
          <Row>
            <Col lg={{ size: 6 }}>
              <div className="heading-text">
                <h2>notification preferences</h2>
              </div>
            </Col>
            <Col lg={{ size: 6 }}>
              <div className="AcntSelectWrapper">
                <DropdownMenu />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="NotificationPreferencesAccordion">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panel-header"
                >
                  <div className="AccordionSummaryHeading">
                    <div>
                      <Typography className="AccordionSummarysubHeading">
                        contract preferences
                      </Typography>
                      <h4>
                        Receive an alert when contracts are about to expire.
                      </h4>
                    </div>
                    <div className="onAccordionSummary">
                      <span>On</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="AccordionDetails">
                  <form noValidate autoComplete="off">
                    <div className="contractPreferences">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedA}
                              onChange={handleChangeCheckbox}
                              name="checkedA"
                              color="secondary"
                            />
                          }
                          label="Notify me"
                        />
                      </FormGroup>
                      <FormControl
                        variant="filled"
                        className={classes.formControl}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Day
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={day}
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={20}>20</MenuItem>
                          <MenuItem value={30}>30</MenuItem>
                          <MenuItem value={30}>90</MenuItem>
                        </Select>
                      </FormControl>
                      <span>days before quotes expire</span>
                    </div>
                    <div className="contractPreferencesButtom">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedB}
                              onChange={handleChangeCheckbox}
                              name="checkedB"
                              color="secondary"
                            />
                          }
                          label="Notify me when a contract is not renewed"
                        />
                      </FormGroup>
                      <div>
                        <Button>cancel</Button>
                        <Button color="primary" variant="contained">
                          Save
                        </Button>
                      </div>
                    </div>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panel-header"
                >
                  <div className="AccordionSummaryHeading">
                    <div>
                      <Typography className="AccordionSummarysubHeading">
                        quote preferences
                      </Typography>
                      <h4>Get quote-related alerts and reminders.</h4>
                    </div>
                    <div className="onAccordionSummary">
                      <span>On</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="AccordionDetails">
                  <form noValidate autoComplete="off">
                    <div className="contractPreferences">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedC}
                              onChange={handleChangeCheckbox}
                              name="checkedC"
                              color="secondary"
                            />
                          }
                          label="Notify me"
                        />
                      </FormGroup>
                      <FormControl
                        variant="filled"
                        className={classes.formControl}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Day
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={day}
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={20}>20</MenuItem>
                          <MenuItem value={30}>30</MenuItem>
                          <MenuItem value={30}>90</MenuItem>
                        </Select>
                      </FormControl>
                      <span>days before quotes expire</span>
                    </div>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedD}
                            onChange={handleChangeCheckbox}
                            name="checkedD"
                            color="secondary"
                          />
                        }
                        label="Notify me when a quote has accepted"
                      />
                    </FormGroup>
                    <div className="contractPreferencesButtom">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedE}
                              onChange={handleChangeCheckbox}
                              name="checkedE"
                              color="secondary"
                            />
                          }
                          label="Notify me when a quote has been declined"
                        />
                      </FormGroup>
                      <div>
                        <Button>cancel</Button>
                        <Button color="primary" variant="contained">
                          Save
                        </Button>
                      </div>
                    </div>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panel-header"
                >
                  <div className="AccordionSummaryHeading">
                    <div>
                      <Typography className="AccordionSummarysubHeading">
                        account preferences
                      </Typography>
                      <h4>Recieve account related notifications.</h4>
                    </div>

                    <div className="onAccordionSummary">
                      <span>On</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="AccordionDetails">
                  <form noValidate autoComplete="off">
                    <div className="contractPreferencesButtom">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedF}
                              onChange={handleChangeCheckbox}
                              name="checkedF"
                              color="secondary"
                            />
                          }
                          label="Be notified when a Guest User account is about to expire"
                        />
                      </FormGroup>
                      <div>
                        <Button>cancel</Button>
                        <Button color="primary" variant="contained">
                          Save
                        </Button>
                      </div>
                    </div>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panel-header"
                >
                  <div className="AccordionSummaryHeading">
                    <div>
                      <Typography className="AccordionSummarysubHeading">
                        system preferences
                      </Typography>
                      <h4>Be notified of system-related changes or updates.</h4>
                    </div>
                    <div className="onAccordionSummary">
                      <span className="NotificationPreferencesOff">Off</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="AccordionDetails">
                  <form noValidate autoComplete="off">
                    <div className="labelSystempreFerences">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={state.checkedG}
                              onChange={handleChangeCheckbox}
                              name="checkedG"
                              color="secondary"
                            />
                          }
                          label="Receive occasional updates from Energy Co, including information about rebates, savings and promotions"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                        className="labelSystempreFerences"
                          control={
                            <Checkbox
                              checked={state.checkedH}
                              onChange={handleChangeCheckbox}
                              name="checkedH"
                              color="secondary"
                            />
                          }
                          label="Receive occasional updates from Energy Co, including information about rebates, savings and promotions"
                        />
                      </FormGroup>
                    </div>
                  </form>
                </AccordionDetails>
              </Accordion>
              <p className="mt-4">
                Message and data rates may apply. You will receive four messages
                per month. Reply HELP for help or STOP to cancel at any time
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="NotificationPreferencesRight">
              <h4>Need to update phone or email?</h4>
              <Button color="primary" variant="contained">
                Manage my profile
              </Button>
            </div>
          </div>
        </div>
        <Button onClick={DialogTermsAndCOpen}>Open TERMS AND CONDITIONS</Button>
        <Dialog
          fullScreen={fullScreen}
          open={openDialogTermsAndC}
          onClose={DialogTermsAndCClose}
          aria-labelledby="DialogContractsCancel-title"
        >
          <div className="dialogContracts">
            <DialogTitle id="DialogContracts-title">
              <h4>terms and conditions</h4>
              <span className="material-icons" onClick={DialogTermsAndCClose}>
                close
              </span>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p>
                  You agree that Energy-Co may call and/or send text messages to
                  you at any telephone number associated with your account,
                  including wireless telephone numbers that could result in
                  charges for you. The manner in which these calls or text
                  messages are made to you may include, but is not limited to,
                  the use of pre-recorded/artificial voice messages and/or
                  automatic telephone dialing system. You can edit your
                  notification preferences for your account at any time.
                </p>
              </DialogContentText>
            </DialogContent>
            <DialogActions className="DialogActions">
              <Button onClick={DialogTermsAndCClose}>I Disagree</Button>
              <Button
                color="primary"
                variant="contained"
                onClick={DialogTermsAndCClose}
              >
                I agree
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    </React.Fragment>
  );
}

export default NotificationPreferences;
