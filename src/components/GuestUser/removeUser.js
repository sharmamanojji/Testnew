import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './Notifier';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const RemoveUser = (props) => {
    const [snackopen,setSnackopen] = useState(false);
    const handleClose = () => {
        props.handleClickClose(false);
    };
    const removeGuest =()=>{
        props.handleClickClose(false);
        setSnackopen(true);
    }
    const handleCloseSnack =()=>{
        setSnackopen(false);
    }
    return (
        <>
            <Dialog
                open={props.ParentEditModalOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Remove Guest User?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Lorem ipsum dummy content comes here.
                        Lorem ipsum dummy content comes here.
                        Lorem ipsum dummy content comes here.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={removeGuest} color="primary">
                        Remove Guest
          </Button>
                </DialogActions>
            </Dialog>
            <Snackbar className="snackbarmain" anchorOrigin={{ vertical: 'top', horizontal: 'center', }}
                open={snackopen} autoHideDuration={60000} onClose={handleCloseSnack}>
                <MySnackbarContentWrapper
                    onClose={handleCloseSnack}
                    variant="success"
                    className="innerSnackBar"
                    message={<span id="message-id">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu.</span>}
                />
            </Snackbar>
        </>
    );
}

export default RemoveUser;