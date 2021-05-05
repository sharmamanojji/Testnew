import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography, Grid,Button } from '@material-ui/core';

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

export default function CostSpecification(props) {
    const handleClose = () => {
        props.handleClickClose(false);
    };

    return (
        <div>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.Parentmodalopen}
                fullScreen
                className="costSpecification">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>

                </DialogTitle>
                <DialogContent>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography component="h2" color="primary">36 Month aaea Cost Specification</Typography>
                            <p>Phasellus mollis sollicitudin nisl, in sagittis nisi dapibus non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <div className="variableCost">
                                <Typography component="h3">Electric Costs</Typography>
                                <Typography component="h4">Variable Costs</Typography>
                                <ul>
                                    <li><label>Delivery Costs Normal</label> <span>0.00</span></li>
                                    <li><label> Delivery Costs Dal</label> <span> 0.00 </span></li>
                                    <li><label> Taxes (0-10,000 kWh) </label> <span> 575.89 </span> </li>
                                    <li><label> <strong>Subtotal</strong> </label> <span><strong>575.89</strong>  </span> </li>
                                </ul>
                            </div>

                            <div className="variableCost">
                                <Typography component="h4">Fixed Costs</Typography>
                                <ul>
                                    <li><label>Fixed Delivery Costs</label> <span>0.00</span></li>
                                    <li><label> Energy Reduction Tax </label> <span>-257.54 </span></li>
                                    <li><label> Network Management Costs </label> <span> 172.09 </span> </li>
                                </ul>
                            </div>
                            <div className="variableCost">
                                <Typography component="h3">Gas Costs</Typography>
                                <Typography component="h4">Variable Costs</Typography>
                                <ul>
                                    <li><label>Delivery Costs Normal</label> <span>0.00</span></li>
                                    <li><label> Delivery Costs Dal</label> <span> 0.00 </span></li>
                                    <li><label> Taxes (0-10,000 kWh) </label> <span> 575.89 </span> </li>
                                    <li><label> <strong>Subtotal</strong> </label> <span><strong>575.89</strong>  </span> </li>
                                </ul>
                            </div>
                            <div className="variableCost">
                                <Typography component="h4">Fixed Costs</Typography>
                                <ul>
                                    <li><label>Fixed Delivery Costs</label> <span>0.00</span></li>
                                    <li><label> Energy Reduction Tax </label> <span>-257.54 </span></li>
                                    <li><label> Network Management Costs </label> <span> 172.09 </span> </li>
                                </ul>
                            </div>
                            <div className="variableCost totalVariable">
                                <ul>
                                    <li><label><strong>total</strong></label><span>€1,339.20</span></li>
                                    <li><label>Electricity + Gas</label> <span>€1,339.20</span></li>
                                    <li><label> Total per year </label> <span>€1,339.20</span></li>
                                    <li><label> Average per month </label> <span>€111.59 </span> </li>
                                </ul>
                            </div>

                            <div className="buttonGroup">
                                <Button variant="contained" color="primary">CLOSE</Button>
                            </div>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}
