import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextFeild from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const styles = makeStyles(theme => ({
    marginBottom:{
        marginBottom: '20px',
    }
}));
const BrokerFee = (props)=> {
  const classes = styles();
  const [value, setValue] = React.useState('otherAmount');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <>
    <Typography component="h2" color="secondary">broker Fee</Typography>
    <FormControl component="fieldset" className="mb-30">
      <RadioGroup   aria-label="account" name="account" value={value} onChange={handleChange}>
        <FormControlLabel value="smallCustomer" control={<Radio />} label="Low Broker Fee (1%)" />
        <FormControlLabel value="largeCustomer" control={<Radio />} label="High Broker Fee (2%)" />
        <FormControlLabel value="otherAmount" control={<Radio />} label="Other Amount" />
      </RadioGroup>
    </FormControl>
        {
            value ==='otherAmount' ?  <OtherAmount /> : null
        }
   
    
    </>
  );
}
export default BrokerFee;


const OtherAmount = ()=>{
    const classes = styles();
    return(
        <>
        <form>
        <TextFeild 
            id=""
            className={classes.marginBottom}
            label="" 
            variant="filled"
            value="1.75%"
            inputProps={{
                'aria-label': `Enter value`
            }}
        />
         </form>
        </>
    )
}