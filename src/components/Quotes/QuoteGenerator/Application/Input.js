import React from 'react';
import TextFeild from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles(theme => ({
    marginBottom:{
        marginBottom: '20px',
    }
}));
export const InputFormField = (props) =>{
    const classes = styles();
    return(
        <TextFeild 
            id={props.firstName}
            className={`w-100 ${classes.marginBottom}`}
            label={props.label} 
            variant="filled"
            inputProps={{
                'aria-label': `Enter + ${props.label}`
            }}
        />
    )
}