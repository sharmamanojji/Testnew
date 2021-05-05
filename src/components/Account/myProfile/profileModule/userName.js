import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
const UserNameField = () => {
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
        <div className="profile-inner">
            <Grid container spacing={4}>
                <Grid item xs={11} md={5}  className="profile-label">
                    <label> Username </label>
                </Grid>
                <Grid item xs={11} md={6}>
                    <label>JoeDoe </label>
                </Grid>
                {
                    editIcon && (<span className="material-icons editIcon" onClick={() => editUserForm()}>edit</span>)
                }
                
            </Grid>
            {
                edituser && (
                    <Grid container spacing={4} className="edit-field">
                        <Grid item xs={12} md={8}>
                            <TextField id="filled-basic" label="Username" variant="filled" fullWidth />
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

export default UserNameField;

