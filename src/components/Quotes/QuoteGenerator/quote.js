import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import QuoteForm from './quoteForm/quoteForm';
import './quote.scss';
import { Typography } from '@material-ui/core';

const Quote = () => {
    return (
        <Grid container spacing={3} className="quote-module">
            <Grid item sm={8} lg={7} xs={12}>
                <QuoteForm />
            </Grid>
            <Grid item sm={4} lg={5} xs={12}>
                <Grid className="application-right">
                    <Typography component="h5">Lorem ipsum dolor sit amet</Typography>
                    <p>Consectetur adipiscing elit. Praesent euismod tellus sit amet ante vulputate, eget mollis orci rutrum. Quisque at lacus at mi iaculis volutpat. Duis sed tellus sit amet ipsum.</p>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Quote;


