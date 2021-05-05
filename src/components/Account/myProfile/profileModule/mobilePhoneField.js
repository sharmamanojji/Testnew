import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const MobilePhoneField = (props) => {
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
                    <label> {props.label} </label>
                </Grid>
                <Grid item xs={11} md={6}>
                    <label> (123) 456-7890 </label>
                </Grid>
                {
                    editIcon && (<span className="material-icons editIcon" onClick={() => editUserForm()}>edit</span>)
                }

            </Grid>
            {
                edituser && (
                    <Grid container spacing={4} className="edit-field">
                        <Grid item xs={12} md={3}>
                            <SelectMobileType />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <TextField id="filled-basic" label={props.label} variant="filled" fullWidth />
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

export default MobilePhoneField;





const SelectMobileType = () => {
    const [type, setType] = React.useState('mobile');

    const handleChange = (event) => {
        const name = event.target.value;
        setType(name);
    };

    return (
        <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="filled-age-native-simple">Type*</InputLabel>
            <Select
                native
                value={type}
                onChange={handleChange}
                inputProps={{
                    name: 'Type*',
                    id: 'filled-age-native-simple',
                }}
            >
                <option value="none">None</option>
                <option value="mobile">Mobile</option>
                <option value="landline">Landline</option>
            </Select>
        </FormControl>)
}

