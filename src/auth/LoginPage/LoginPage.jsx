import React, { useState, useRef } from "react";
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Snackbar from '@material-ui/core/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { userService } from '../_services';
import './login.css';
import logoWhite from '../../assets/images/logo.svg';
import googlelogo from '../../assets/images/google.png';
import fblogo from '../../assets/images/fbloginwhite.png';
import MySnackbarContentWrapper from '../../components/Snackbar/Notifier';
import SessionExpiredModal from '../../components/Common/SessionExpired';
import TwoFactorAuth from './TwoFactorAuth';
import { Container, Row, Col, ListGroup } from "reactstrap";


const styles = theme => ({
    ButtonContained: {
        backgroundColor: theme.palette.primary.main,
    }
});

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        userService.logout();
        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: '',
            Language: '',
            success: false,
            successCode: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSelect = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        userService.login(username, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false, success: true })
            );
    }

    handleOnChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleChangeButton = (e) => {
        alert(e.currentTarget.value)
        this.props.setFieldValue('degreeLevel', e.currentTarget.value);
    }
    handleonClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ success: false });
    };

    sucessCodeOPen = () => {
        this.setState({ successCode: true });
    }
    codehandleonClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ successCode: false });
    };
    render() {
        const { username, password, submitted, loading, error } = this.state;
        const { classes } = this.props;
        return (
            <section className="loginbg">
                <Container>
                    <Grid item className="LoginColumn" lg={12} xs={12} sm={12}>
                        <Grid className="logoContainer" lg={6} sm={6} xs={12}>
                            <Container>
                                <Row>
                                    <Col size="6">
                                        <a id="logo-container" href="#" className="brand-logo">
                                            <img src={logoWhite} alt="MainLogo" />
                                        </a>
                                    </Col>
                                    <Col size="6">
                                        <FormControl class="formControl langSelect">
                                            <InputLabel shrink htmlFor="year-label-placeholder"></InputLabel>
                                            <Select classes={{ icon: 'DropIconStyle' }}
                                                value={this.state.Language}
                                                onChange={this.handleSelect}
                                                name="Language"
                                                input={<Input disableUnderline name="Language" id="year-label-placeholder" />}
                                                displayEmpty
                                                IconComponent={ExpandMore}
                                                iconStyle={{ color: "#fff" }} >
                                                <MenuItem value=""><em>English</em> </MenuItem>
                                                <MenuItem value={10}>Spanish</MenuItem>
                                                <MenuItem value={20}>French</MenuItem>
                                            </Select>
                                        </FormControl></Col>
                                </Row>
                            </Container>
                        </Grid>
                        <Grid className="logoContainer" lg={6} xs={12} sm={6}>
                        </Grid>
                        <Col lg="6" sm="8" xs="12" className="float-left">
                            <Paper elevation={0} className="loginPaper">
                                <Typography component="h3" color="primary" variant="h3" className="Loginpagehead">Login</Typography>
                                <ValidatorForm name="form" onSubmit={this.handleSubmit} className="LoginForm" autoComplete="off">
                                    <div className="GoogleLogin loginareabtns">
                                        <Button color="primary" className="GoogleBtn">
                                            <img src={googlelogo} alt="google" className="googlelogo" />
                                            Sign in with Google
                                        </Button>
                                        <Button color="primary" className="FacebookBtn">
                                            <img src={fblogo} alt="facebook" className="googlelogo" />
                                            Sign in with Facebook
                                        </Button>
                                    </div>
                                    <div className="dividersection">
                                        <Typography>or</Typography>
                                    </div>
                                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                        <TextValidator className="editFields" id="username" autoFocus
                                            inputRef={this.textInput}
                                            label="Username" type="text" name="username" onChange={this.handleChange}
                                            autoComplete="off" margin="normal" variant="filled" value={username}
                                            validators={['required', 'isEmail']} errorMessages={['Enter a valid email address', ' Your user ID and Password do not match']} />

                                    </div>
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <TextValidator className="editFields" id="outlined-password-input"
                                            label="Password" type="password" name="password" onChange={this.handleChange}
                                            autoComplete="off" margin="normal" variant="filled" value={password}
                                            validators={['required']} errorMessages={['Enter a valid Password', 'Your user ID and Password do not match']} />

                                    </div>
                                    <div className="form-group">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.checkedB}
                                                    onChange={this.handleOnChange('checkedB')}
                                                    value="checkedB"
                                                    color="secondary"
                                                />
                                            }
                                            label="Remember Me"
                                        />
                                    </div>
                                    <div className="form-group" style={{ position: 'relative' }}>
                                        <button onClick={this.focusTextInput} variant="contained" color="inherit" className={clsx(classes.ButtonContained, 'btn loginboxbutton')} disabled={loading}>
                                            Login</button>
                                        {loading &&
                                            <CircularProgress className="SpinnCirc" size={50} thickness={3} />
                                        }
                                    </div>
                                </ValidatorForm>
                                <ListGroup className="extralinks">
                                    <li>
                                        <Link to="/">Forgot username</Link><span>or</span>
                                        <Link to="/">Can't login?</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Don't have an account? Register</Link>
                                    </li>
                                </ListGroup>
                            </Paper>
                        </Col>
                        <Col lg="6" sm="4" className="float-left rightArea d-sm-block">
                            <div class="enrollboxarea">
                                <b>New to My Account?</b>
                                <p>With My Account, you can pay bills online, analyze your bill, view your energy use and sign up for paperless billing.</p>

                            </div>
                            <ListGroup className="LoginLists">
                                <Link to="/">Registration</Link>
                            </ListGroup>
                        </Col>
                        <Snackbar className="snackbarmain" anchorOrigin={{ vertical: 'top', horizontal: 'center', }}
                            open={this.state.success} autoHideDuration={60000} onClose={this.handleonClose}>
                            <MySnackbarContentWrapper
                                onClose={this.handleonClose}
                                variant="error"
                                message={<span id="message-id">Your User ID and/or Password  do not match our records. Please try again.</span>}
                                action={[

                                ]}
                            />
                        </Snackbar>
                    </Grid>
                </Container>
                <div className="d-none">
                    <TwoFactorAuth />
                </div>
                <SessionExpiredModal sessionExpired="true" />
            </section>
        );
    }
}

export default withStyles(styles)(LoginPage);