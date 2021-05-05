import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import DatePicker from '../Common/DatePicker';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    }
}));
function Transition(props) {
    return <Slide direction="up" {...props} />;
}
const InviteUser = (props) => {
    const classes = useStyles();
    const [roleName, setRoleName] = useState('Admin');
    const [selectAccount, setSelectAccount] = useState('2020');
    const [disabledVal,setDisabledVal]= useState(true);

    const handleChange = (event) => {
        setRoleName(event.target.value);
        setDisabledVal(false)
    };
    const handleClose = () => {
        props.handleClickClose(false);
    };
    const selectAccountChange = event => {
        setSelectAccount(event.target.value);
    };
    return (
        <Dialog
            fullScreen
            open={props.ParentEditModalOpen}
            onClose={handleClose}
            TransitionComponent={Transition}
            className="editModaldata"
        >
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={10} md={10}>
                    <div className="gutterareapop">
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close"><CloseIcon /></IconButton>
                    </div>
                </Grid>
                <Grid item xs={10} md={6}>
                    <Typography variant="h6" color="primary" className="h6Heading">Invite a Guest User</Typography>
                    <p className='paratxt'>
                        Phasellus mollis sollicitudin nisl, in sagittis nisi dapibus non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div class="modal_role">
                        <Typography color="primary" component="h4">Role</Typography>
                    </div>
                    <div className="editUserField">
                        <form variant="filled" noValidate autoComplete="off">
                            <FormControl variant="filled" className={classes.root}>
                                <InputLabel id="demo-simple-select-filled-label">Select Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={roleName}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="User">User</MenuItem>
                                    <MenuItem value="Admin">Admin</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="outlined-name" label="Name" className={classes.root} variant="filled" />
                            <TextField id="outlined-name" label="Email Address" className={classes.root} variant="filled" />
                            <TextField id="outlined-name" label="Phone Number (Optional)" className={classes.root} variant="filled" />
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        id="standard-select-currency"
                                        className={classes.root}
                                        margin="normal"
                                        variant="filled"
                                        select
                                        label="Select Account"
                                        value={selectAccount}
                                        onChange={selectAccountChange}
                                    >
                                        {accountData.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <DatePicker />
                                </Grid>
                            </Grid>

                            <div class="FormButtonsArea">
                                <Button color="primary">Cancel</Button>
                                <Button variant="contained" color="primary" disabled={disabledVal}>INVITE</Button>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default InviteUser;


const accountData = [
    { value: '2020', label: '1234567899' },
    { value: '2021', label: '2021757873857' },
    { value: '2022', label: '20223467607' },
    { value: '2023', label: '202336886888' }
]