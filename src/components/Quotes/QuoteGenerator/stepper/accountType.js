import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {InputFormField} from '../Application/Input';
import SearchMap from './searchMap';
const AccountType = ()=> {
  const [value, setValue] = React.useState('owner');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <>
    <FormControl component="fieldset" className="mb-30">
      <RadioGroup row  aria-label="account" name="account" value={value} onChange={handleChange}>
        <FormControlLabel value="owner" control={<Radio />} label="Residential" />
        <FormControlLabel value="contractor" control={<Radio />} label="Commercial" />
      </RadioGroup>
    </FormControl>
        {
            value ==='owner' ?  <SearchMap /> : <OrganizationNameField />
        }
   
    
    </>
  );
}
export default AccountType;


const OwnerField = ()=>{
    return(
        <>
        <form>
         <InputFormField label="First Name" id="firstName"/> 
         <InputFormField label="Last Name" id="lastName"/> 
         </form>
        </>
    )
}

const OrganizationNameField =()=>{
    return(
        <form>
            <InputFormField label="Company/Organization Name" id="orgName"/>
            <OwnerField />
        </form>
    )
}