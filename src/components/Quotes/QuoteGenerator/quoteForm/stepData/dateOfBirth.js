import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography, Grid, Container } from '@material-ui/core';

const months = [
  { value: 'Jan', label: 'January' },
  { value: 'feb', label: 'February' },
  { value: 'mar', label: 'March' },
  { value: 'Apr', label: 'April' },
  { value: 'may', label: 'May' },
  { value: 'jun', label: 'June' },
  { value: 'jul', label: 'July' },
  { value: 'aug', label: 'August' },
  { value: 'sep', label: 'September' },
  { value: 'oct', label: 'October' },
  { value: 'nov', label: 'November' },
  { value: 'dec', label: 'December' }
];
const days = [
  { value: '01', label: '01' },
  { value: '02', label: '02' },
  { value: '03', label: '03' },
  { value: '04', label: '04' },
  { value: '05', label: '05' },
  { value: '06', label: '06' },
  { value: '07', label: '07' },
  { value: '08', label: '08' },
  { value: '09', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
  { value: '24', label: '24' },
  { value: '25', label: '25' },
  { value: '26', label: '26' },
  { value: '27', label: '27' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
  { value: '30', label: '30' },
  { value: '31', label: '31' }
];
const years = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' }
];

export default function DateOfBirth() {
  const [month, setMonth] = React.useState('Jan');
  const [day, setDay] = React.useState('01');
  const [year, setYear] = React.useState('2020');
  const monthHandleChange = event => {
    setMonth(event.target.value);
  };
  const dayHandleChange = event => {
    setDay(event.target.value);
  };
  const yearHandleChange = event => {
    setYear(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography component="h2" color="secondary">Date Of Birth</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4} className="dateBirth-field">
        <TextField
            id="standard-select-currency"
            className="TextFieldWrapper"
            margin="normal"
            variant="filled"
            select
            label="Month"
            value={month}
            onChange={monthHandleChange}
          >
            {months.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4} className="dateBirth-field">
        <TextField
            id="standard-select-currency"
            className="TextFieldWrapper"
            margin="normal"
            variant="filled"
            select
            label="Day"
            value={day}
            onChange={dayHandleChange}
          >
            {days.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4} className="dateBirth-field">
        <TextField
            id="year"
            className="TextFieldWrapper"
            margin="normal"
            variant="filled"
            select
            label="Year"
            value={year}
            onChange={yearHandleChange}
          >
            {years.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      
    </React.Fragment>
  )
}


