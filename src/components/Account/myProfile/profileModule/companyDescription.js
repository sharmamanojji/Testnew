import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
const CompanyDescription = () => {
    const [edituser, setEditUser] = useState(false);
    const [editIcon, setEditIcon] = useState(true);
    const editUserForm = () => {
        setEditUser(!edituser)
        setEditIcon(false)
    }
    const cancelEditUser = () => {
        setEditUser(!edituser)
        setEditIcon(true)
    }
    return (
        <div className="profile-inner company-description">
            <Grid container spacing={4}>
                <Grid item xs={11} md={11}  className="profile-label">
                    <label> Company Description </label>
                </Grid>
                <Grid item xs={11} md={12} className="company-desc">
                    <label>Quisque urna amet facilisi sit phasellus suscipit nisl ridiculus magna nunc, ligula blandit gravida rutrum turpis vivamus sollicitudin integer aliquet. Efficitur nulla tempus elementum himenaeos nisl ex euismod dapibus, amet ultricies suspendisse quam dictumst nunc magna, feugiat malesuada scelerisque accumsan urna eu quis. </label>
                    <small>297/500</small>
                </Grid>
                {
                    editIcon && (<span className="material-icons editIcon" onClick={() => editUserForm()}>edit</span>)
                }
                
            </Grid>
            {
                edituser && (
                    <Grid container spacing={4} className="edit-field">
                        <Grid item xs={12} md={8}>
                            <textarea  id="filled-basic" label="Username" variant="filled" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={4} className="button-group justify-end">
                            <Button color="primary" onClick={() => cancelEditUser()}>CANCEL</Button>
                            <Button variant="contained" color="primary">
                                SAVE
                            </Button>
                        </Grid>
                    </Grid>
                )
            }
        </div>
    );
};

export default CompanyDescription;

