import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import { FilledInput } from '@material-ui/core';

const PasswordField = () => {
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
                <Grid item xs={11} md={5} className="profile-label">
                    <label> Password </label>
                </Grid>
                <Grid item xs={11} md={6}>
                    <label>•••••••••••••••••••••• </label>
                </Grid>
                {
                    editIcon && (<span className="material-icons editIcon" onClick={() => editUserForm()}>edit</span>)
                }

            </Grid>
            {
                edituser && (
                    <Grid container spacing={4} className="edit-field">
                        <Grid item xs={12} md={6}>
                            <TextField type="password" id="filled-basic" label="Existing Password*" variant="filled" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <PassWordField label="New Password*"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <PassWordField label="Confirm New Password*"/>
                        </Grid>
                        <Grid item xs={12} md={12} className="button-group justify-end">
                            <Button color="primary" onClick={() => cancelEditUser()}>CANCEL</Button>
                            <Button variant="contained" color="primary">
                                change password
                            </Button>
                        </Grid>
                    </Grid>
                )
            }
        </div>
    );
};

export default PasswordField;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));
const PassWordField = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="filled-adornment-password" fullWidth>{props.label}</InputLabel>
            <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                fullWidth
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

