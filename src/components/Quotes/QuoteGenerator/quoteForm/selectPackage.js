import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import packageImg from '../../../../assets/images/packageImg.svg';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const SelectPackage = (props) => {
  const classes = useStyles();
  const [active,setActive] = useState(0);
  const selectProduct = (data) =>{
    setActive(data); 
  }
  return (
    <>
      <Typography component="h2" color="secondary">Select Plan</Typography>
      <div className={classes.root + ' select-package'}>
        <Grid container spacing={3}>
          {
            SelectDataJson.map((data,index) => {
              return (
                <Grid item xs={6} key={index} className={index=== active ? 'active':'' } onClick={()=> selectProduct(index)}>
                  <Paper className={classes.paper + ' paperCustom'}>
                    <img src={packageImg} alt="package image" />
                    <h2>{data.heading}</h2>
                    <p>{data.description}</p>
                    <Typography component="h3" color="secondary">{data.price}</Typography>
                    <Button color="primary" variant="contained"> {data.buttonTxt} </Button>
                    <Link to="/">{data.linkText}</Link>
                  </Paper>
                </Grid>
              )
            })
          }
        </Grid>
      </div>

    </>
  );
}
export default SelectPackage;


const SelectDataJson = [
  {
    heading: '12 Months AAEA',
    description: 'Descriptive text about this contract type lorem ipsum Phasellus a pellentesque nisl.',
    price: '€1,939.05',
    buttonTxt: 'Order plan',
    linkText: 'View Cost Specification'
  },
  {
    heading: '24 Months AAEA',
    description: 'Descriptive text about this contract type lorem ipsum Phasellus a pellentesque nisl.',
    price: '€1,939.05',
    buttonTxt: 'Order plan',
    linkText: 'View Cost Specification'
  },
  {
    heading: '36 Months AAEA',
    description: 'Descriptive text about this contract type lorem ipsum Phasellus a pellentesque nisl.',
    price: '€1,939.05',
    buttonTxt: 'Order plan',
    linkText: 'View Cost Specification'
  },
  {
    heading: '12 Months FIXED',
    description: 'Descriptive text about this contract type lorem ipsum Phasellus a pellentesque nisl.',
    price: '€1,939.05',
    buttonTxt: 'Order plan',
    linkText: 'View Cost Specification'
  }
]


