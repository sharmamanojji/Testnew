import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import { Grid, Paper,Typography } from '@material-ui/core';
import EditUser from './editUser';
import InviteUser from './inviteUser';
import RemoveUser from './removeUser';

const SimpleCard = () => {
    const [anchorEl, setanchorEl] = useState(null);
    const [editmodalopen, setEditModalopen] = useState(false);
    const [addmodalopen, setaddModalopen] = useState(false);
    const [removemodalopen, setRemoveModalopen] = useState(false);

    const editHandleClickOpen = () => {
        setEditModalopen(true);
    };
    const editHandleClickClose = (data) => {
        setEditModalopen(data);
        setanchorEl(null)
    };


    const addHandleClickOpen =()=>{
        setaddModalopen(true);
    }
    const addHandleClickClose = (data) => {
        setaddModalopen(data);
    };


    const removeHandleClickOpen = (data) => {
        setanchorEl(null);
        setRemoveModalopen(data);
    };
    const removeHandleClickClose = (data) => {
        setRemoveModalopen(data);
    };
    



    const handleClick = event => {
        setanchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setanchorEl(null);
    };
    return (
        <>
            <Grid container spacing={2}>
                {
                    CardData.map((data, index) => {
                        return (
                            <Grid item xs={12} md={6}>
                                <Paper className="acut_box">
                                    <IconButton aria-owns={anchorEl} aria-haspopup="true" onClick={handleClick} className="kebabMenu">
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        elevation={2}
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem className="keybob" onClick={editHandleClickOpen}>Edit</MenuItem>
                                        <MenuItem onClick={removeHandleClickOpen}>Remove</MenuItem>
                                        <MenuItem>Resend Activation</MenuItem>
                                    </Menu>
                                    <h3>{data.userName}</h3>
                                    <p>{data.emailId}</p>
                                    <p>Role: {data.role}</p>
                                    <p>Account: {data.account}</p>
                                    <p>Access Expires: {data.accessExpires}</p>
                                    <Chip label={data.status} className={data.status === 'active' ? 'activeStatus' : 'pendingStatus'} />
                                </Paper>
                            </Grid>
                        )
                    })
                }
                <Grid item xs={12} md={6}>
                    <Paper className="acut_box addAGuest"  onClick={addHandleClickOpen}>
                        <div class="acut_box_guest">
                            <span class="material-icons add_acut_icon">account_circle</span>
                            <Typography component="p" color="primary">
                                <i class="material-icons add_plus_icon">add</i>
                                <label>ADD A GUEST USER</label>
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <EditUser ParentEditModalOpen={editmodalopen} handleClickClose={editHandleClickClose} />
            <InviteUser ParentEditModalOpen={addmodalopen} handleClickClose={addHandleClickClose} />
            <RemoveUser ParentEditModalOpen={removemodalopen} handleClickClose={removeHandleClickClose}/>
        </>
    );
};

export default SimpleCard;


const CardData = [
    {
        userName: 'jacob bernthal',
        emailId: 'jacob.bernthal@energyco.com',
        role: 'Admin',
        account: 'Home - 123 Doe St',
        accessExpires: 'September 10, 2021',
        status: 'active'
    },
    {
        userName: 'Benjamin Macklemore',
        emailId: 'benjamin.macklemore@energyco.com',
        role: 'Standard',
        account: 'Home - 123 Doe St',
        accessExpires: 'September 10, 2021',
        status: 'Pending'
    }
]