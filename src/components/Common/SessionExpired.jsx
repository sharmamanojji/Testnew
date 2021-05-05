import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomizedDialogs(props) {
  const classes = useStyles();
  const [showLoading, setShowLoading] = useState(false);
  const [open, setOpen] = React.useState(true);
  console.log("props.sessionExpired", props.sessionExpired);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShowLoading(true), 3000 * 100)
      // this will clear Timeout when component unmont like in willComponentUnmount
      return () => {
        clearTimeout(timer1)
      }
    },
    [] //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  )

  return showLoading &&
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Session Expiration
        </DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          You are about to be automatically logged out of your session due to inactivity.
          To keep working. select Continue
          </Typography>
      </DialogContent>
      <DialogActions>
        <Button component={ Link } onClick={handleClose} to="./login" className="link-color" color="secondary">Log Out</Button>
        <Button onClick={handleClose} className="link-color" color="secondary">Stay Logged In</Button>
      </DialogActions>
    </Dialog>
}
