import React, { useState } from 'react';
import { Button, Dialog, Grid, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';

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
const UploadLogo = () => {
    const [showUpload, setShowUpload] = useState(false);
    return (
        <>
            <div className="profile-inner">
                <Grid container spacing={4}>
                    <Grid item xs={11} md={5} className="profile-label">
                        <label> upload Logo </label>
                    </Grid>
                    <Grid item xs={11} md={6}>
                        <label onClick={() => setShowUpload(true)}>Browse... </label>
                    </Grid>
                </Grid>
            </div>


            {showUpload && (
                <Dialog
                    onClose={() => setShowUpload(false)}
                    aria-labelledby="customized-dialog-title"
                    open={showUpload}
                    minWidth={'lg'}
                    className="customize-modal">
                    <div className="dialogContracts">
                        <DialogTitle id="customized-dialog-title" onClose={() => setShowUpload(false)}>
                            Upload Logo
                    </DialogTitle>
                        <DialogContent>
                            <div className="selectfromData minSize">
                                <div className="upload-area">
                                    <label for="file">
                                        <p>
                                            <span className="material-icons">attach_file</span>
                                            <i>Drop files here or{" "}</i>
                                            <b>select from your computer</b>
                                        </p>
                                        <small>
                                            Supported file formats: PNG, JPG, PDF or CAD | Maximum File
                                            Size:50 MB
                                    </small>
                                        <input id="file" type="file" />
                                    </label>
                                </div>
                            </div>
                            <Grid container spacing={4} className="imagelist">
                                <Grid item xs={11} md={7}>
                                    <ul>
                                        <li>
                                            <span className="material-icons">attach_file</span>
                                            <label>Updated_Logo.PNG</label>
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid item xs={11} md={5}>
                                    <CustomizedProgressBars />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setShowUpload(false)} className="close-btn" variant="outlined" color="primary">
                                cancel
              </Button>
                            <Button className="submit-btn" variant="contained" color="primary">submit</Button>
                        </DialogActions>
                        </div>
                </Dialog>
            )}

        </>
            );
};

export default UploadLogo;


const BorderLinearProgress = withStyles((theme) => ({
                root: {
                height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
                backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
                borderRadius: 5,
        backgroundColor: '#29BBAE',
    },
}))(LinearProgress);

const useStyles = makeStyles({
                root: {
                flexGrow: 1,
    },
});

const CustomizedProgressBars = () => {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <BorderLinearProgress variant="determinate" value={80} />
            </div>
    );
}