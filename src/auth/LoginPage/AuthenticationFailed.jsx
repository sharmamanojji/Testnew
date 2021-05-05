import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { userService } from '../_services';
import './login.css';
import { Link  } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "reactstrap";

const styles = theme => ({
    ButtonContained: {
        backgroundColor: theme.palette.secondary.main,
    }
});

class AuthenticationFailed extends React.Component {
    constructor(props) {
        super(props);
        userService.logout();
        this.state = {

        };
    }
    render() {
        const { classes } = this.props;
        return (
            <section className="loginbg">
                <Container className="AuthenticationFail">
                    <Grid item className="LoginColumn" lg={12} xs={12} sm={12}>
                        <Col lg="6" sm="8" xs="12" className="float-left">
                            <div className="w-100">
                                <div className="loginPaper twoFactor text-left mt30">
                                    <Typography component="h3" color="primary" className="Loginpagehead border-bottom pb-3">Authentication Failed</Typography>
                                    <p>You have exceeded the maximum number of verification attempts. Please wait 30 minutes before trying to 
                                    <Link to="/"> log in again</Link> .</p>
                                    <h4 className="mayAlso">
                                        You may also try:
                                    </h4>
                                    <div className="w-100">
                                        <a href="/" className="link-color d-flex flex-column">Resetting your password </a>
                                        <a href="/" className="link-color d-flex flex-column pt-2">Contacting Energy Co. Customer Solutions</a>
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

            </section>
        );

    }
}


export default withStyles(styles)(AuthenticationFailed);