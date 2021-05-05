import React from "react";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import { userService } from '../_services';
import './login.css';
import MySnackbarContentWrapper from '../../components/Snackbar/Notifier';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AuthenticationFailed from './AuthenticationFailed';
import { Container, Row, Col, ListGroup } from "reactstrap";

const styles = theme => ({
    ButtonContained: {
        backgroundColor: theme.palette.secondary.main,
    }
});

class TwoFactorAuth extends React.Component {
    constructor(props) {
        super(props);
        userService.logout();
        this.state = {
            success: false,
            successCode: false,
            value: '',
            stepper: false,
            openResComVal: 'sendCode'
        };
    }
    sucessCodeOPen = () => {
        this.setState({ successCode: true });
    }
    codehandleonClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ successCode: false });
    };
    inputValChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }
    stepperFun = () => {
        this.setState({
            stepper: true
        })
    }
    openResCom = (event) => {
        this.setState({ openResComVal: event.target.value });
    }
    render() {
        const { classes } = this.props;
        let resCom = false;
        if (this.state.openResComVal === 'sendCode') {
            resCom = true
        }
        return (
            <section className="loginbg">
                <Container>
                    <Grid item className="LoginColumn" lg={12} xs={12} sm={12}>
                        <Col lg="6" sm="8" xs="12" className="float-left">
                            <div className="w-100">
                                <div className={this.state.stepper ? 'loginPaper twoFactor text-left mt30 d-none' : 'loginPaper twoFactor text-left mt30'}>
                                    <Typography component="h3" color="primary" className="Loginpagehead border-bottom pb-3">Two Factor Authentication</Typography>
                                    <p>Do You Have an Online Account with Energy Co.?</p>
                                    <div className="swg-radio">
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <RadioGroup className={classes.Radiogroup}
                                                aria-label="Select account number or service address"
                                                name="AccountSelection"
                                                value={this.state.openResComVal}
                                                onChange={this.openResCom}
                                                defaultValue="sendCode">
                                                <FormControlLabel
                                                    value="sendCode"
                                                    control={<Radio color="secondary" />}
                                                    label="Send a code to my email address (xxx@ad.com)"
                                                />
                                                <FormControlLabel
                                                    value="sendText"
                                                    control={<Radio color="secondary" />}
                                                    label="Send a text to me cell number(858-356-xxxx)"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                        <div className={resCom ? 'w-100 sendCode' : 'd-none'}>

                                        </div>
                                        <div className={resCom ? 'd-none' : 'w-100 sendText'}>
                                            <p>
                                                You agree that Energy Co. may call and/or send text messages to you at any telephone number associated with your account, including wireless telephone numbers that could result in charges for you. The manner in which these calls or text messages are made to you may include, but is not limited to, the use of pre-recorded/artificial voice messages and/or automatic telephone dialing system. You can edit your notification preferences for your account at any time.
                                            </p>
                                            <p className="borderTop">Click the <b>NEXT</b> button to accept the Terms & Conditions or <b>CANCEL</b> to go back.</p>
                                        </div>
                                    </div>
                                    <div className="FormButtonsArea">
                                        <Button color="secondary" className="ButtonPrimary">Cancel</Button>
                                        <Button type="submit" color="secondary" onClick={this.stepperFun} variant="contained" className="ButtonPrimary">Next</Button>
                                    </div>
                                </div>
                                <div className={this.state.stepper ? 'loginPaper twoFactor text-left mt30' : 'd-none'}>
                                    <h3 className="Loginpagehead border-bottom pb-3">Two Factor Authentication</h3>
                                    <p>We've just emailed a code to xxx@address.com. Enter that code below. </p>
                                    <div className="text-code">
                                        <input type="text" value={this.state.value} onChange={(e) => this.inputValChange(e)} />
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                    </div>
                                    <p className="text-muted mt20">Verifying your account helps keep your account more secure</p>
                                    <Link to="/" className="link-color w-100 mt20">Resend activation code</Link>
                                    <div className="FormButtonsArea">
                                        <Button color="secondary" className="ButtonPrimary">Cancel</Button>
                                        <Button color="secondary" variant="contained" className="ButtonPrimary" onClick={this.sucessCodeOPen}>Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" sm="4" className="float-left rightArea d-none d-sm-block">
                            <div class="enrollboxarea">
                                <b>Lorem Ipsum dollar sit amet</b>
                                <p>With My Account, you can pay bills online, analyze your bill, view your energy use and sign up for paperless billing.</p>

                            </div>
                        </Col>
                    </Grid>
                </Container>
                <Snackbar className="snackbarmain" anchorOrigin={{ vertical: 'top', horizontal: 'center', }}
                    open={this.state.successCode} autoHideDuration={2000} onClose={this.codehandleonClose}>
                    <MySnackbarContentWrapper
                        onClose={this.codehandleonClose}
                        variant="success"
                        message={<span id="message-id">Authentication code has been resent.</span>}
                        action={<React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.codehandleonClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>}
                    />
                </Snackbar>
                <AuthenticationFailed />
            </section>
        );

    }
}

export default withStyles(styles)(TwoFactorAuth);