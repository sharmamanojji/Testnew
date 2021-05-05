import React from 'react';
import { Paper, Button, Typography, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import EnrollBillingImg from '../../../assets/images/enroll_billingimg.png';

const MailingAddress = () => {
    return (
        <>
            <Typography component="h2" color="primary" className="heading-top mt-20 pb-15">My Mailing Addresses</Typography>
            <Paper className="mailing-address">
                <h5>Nickname</h5>
                <Typography component="label" className="accNumber">
                    6040 University Ave.<br />
                        Anytown, PA  12345
                    </Typography>
                <Link to="/">Edit</Link>
            </Paper>


            <Paper className="mailing-address mt-40">
                <Grid container>
                    <Grid item md={9}>
                        <h5>special program 1</h5>
                        <Typography component="label" className="accNumber">
                            Integer erat dapibus potenti maximus morbi inceptos taciti penatibus lacus sem.
                    </Typography>
                        <Button variant="contained" color="primary">ENROLL</Button>
                    </Grid>
                    <Grid item md={3}>
                        <img src={EnrollBillingImg} alt="enroll billing"/>
                    </Grid>
                </Grid>
            </Paper>

        </>
    );
};

export default MailingAddress;