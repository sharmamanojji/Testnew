import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
const UserField = () => {
    return (
        <div className="profile-inner">
            <Grid container spacing={4}>
                <Grid item xs={11} md={5} className="profile-label">
                    <label> Name </label>
                </Grid>
                <Grid item xs={11} md={6}>
                    <label>Name </label>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserField;

