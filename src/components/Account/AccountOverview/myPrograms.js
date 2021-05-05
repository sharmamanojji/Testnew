import React from 'react';
import { Paper, Button, Typography, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
const MyPrograms = () => {
    return (
        <>
            <Typography component="h2" color="primary" className="heading-top mt-20 pb-15">My Programs</Typography>
            <Paper className="programs-detail">
                {
                    myProgramData.map((data, index) => {
                        return (
                            <Grid container className={index % 2 === 0 ? 'odd':'even'}>
                                <Grid item md={5}>
                                    <strong> {data.label} </strong>
                                </Grid>
                                <Grid item md={3}>
                                    <label> {data.status} </label>
                                </Grid>
                                <Grid item md={4}>
                                    <Link to="/">{data.link}</Link>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Paper>

        </>
    );
};

export default MyPrograms;


const myProgramData = [
    {
        label: 'Online Auto Pay', status: 'Not Enrolled', link: 'Sign Up'
    },
    {
        label: 'Demand Response', status: 'Not Enrolled', link: 'Sign Up'
    },
    {
        label: 'Paperless Billing', status: 'Enrolled', link: 'Cancel'
    }

]