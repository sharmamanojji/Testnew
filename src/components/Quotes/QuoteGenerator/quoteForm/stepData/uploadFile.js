import { Button, Container, Dialog, Grid, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';

import React, { useState } from "react";

const styles = (theme) => ({
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
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
export default function UploadDocuments() {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <Grid className="border">
                <div className="upload-area">
                <label for="file">
                  <p>
                    <span className="material-icons">attach_file</span> 
                    <i>Drop files here or{" "}</i>
                    <u>select from your computer</u>
                  </p>
                  <small>
                    Supported file formats: PNG, JPG, PDF or CAD | Maximum File
                    Size:50 MB
                </small>
                  <input id="file" type="file" />
                </label>
                </div>
              </Grid>

      {showUpload && (
          <Dialog onClose={() => setShowUpload(false)} aria-labelledby="customized-dialog-title" open={showUpload}>
            <DialogTitle id="customized-dialog-title" onClose={() => setShowUpload(false)}>
              Upload Documents
            </DialogTitle>
            <DialogContent>
              
            </DialogContent>
            <DialogActions>
              <Button  onClick={() => setShowUpload(false)}  className="close-btn" variant="outlined"  color="primary">
                cancel
              </Button>
              <Button className="submit-btn" variant="contained" color="primary">submit</Button>
            </DialogActions>
          </Dialog>
      )}
        </>
      );
}
