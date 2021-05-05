import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Container, Row, Col } from "reactstrap";
import SelectDataPicker from "../Contracts/SelectDataPicker";

const options = [
  "Send Renewal Notice",
  "Modify Contract",
  "Cancel Contract",
  "Change Service Type",
];

const ITEM_HEIGHT = 48;

export default function InvoiceTableMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //

  const [
    openDialogContractsCancel,
    setOpenDialogContractsCancel,
  ] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const DialogContractsCancelOpen = () => {
    setOpenDialogContractsCancel(true);
    setAnchorEl(null);
  };

  const DialogContractsCancelClose = () => {
    setOpenDialogContractsCancel(false);
  };

  const [ openDialogContractsRenew, setOpenDialogContractsRenew ] = React.useState(false);

  const DialogContractsRenewOpen = () => {
    setOpenDialogContractsRenew(true);
    setAnchorEl(null);
  };

  const DialogContractsRenewClose = () => {
    setOpenDialogContractsRenew(false);
  };
  const [ openDialogContractsRenewalNotice, setOpenDialogContractsRenewalNotice ] = React.useState(false);

  const DialogContractsRenewalNoticeOpen = () => {
    setOpenDialogContractsRenewalNotice(true);
    setAnchorEl(null);
  };

  const DialogContractsRenewalNoticeClose = () => {
    setOpenDialogContractsRenewalNotice(false);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        <MenuItem classes={{ root: 'listMenuItem'}} onClick={DialogContractsRenewOpen}>
        Renew Contract
        </MenuItem>
        <MenuItem classes={{ root: 'listMenuItem'}} onClick={handleClose}>Modify Contract</MenuItem>
        <MenuItem classes={{ root: 'listMenuItem'}} onClick={DialogContractsCancelOpen}>Cancel Contract</MenuItem>
        <MenuItem classes={{ root: 'listMenuItem'}} onClick={DialogContractsRenewalNoticeOpen}>Send Renewal Notice</MenuItem>
      </Menu>

      <Dialog
        fullScreen={fullScreen}
        open={openDialogContractsCancel}
        onClose={DialogContractsCancelClose}
        aria-labelledby="DialogContractsCancel-title"
      >
        <div className="dialogContracts">
          <DialogTitle id="DialogContracts-title">
            <h4>Are you sure you want to cancel this contract?</h4>
            <span
              className="material-icons"
              onClick={DialogContractsCancelClose}
            >
              close
            </span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div className="DialogContractInfo">
                <Container>
                  <Row>
                    <Col md="4">
                      <span>Contract ID</span>
                      <h6>123456789</h6>
                    </Col>
                    <Col md="4">
                      <span>Package Type</span>
                      <h6>36 Months - AAEA</h6>
                    </Col>
                    <Col md="4">
                      <span>Package Cost</span>
                      <h6>€1,339.20</h6>
                    </Col>
                  </Row>
                </Container>
              </div>
              <p>
                Lobortis dis montes dapibus sagittis orci donec aliquet nostra
                imperdiet, cras lacinia sodales elementum accumsan malesuada
                habitant faucibus blandit enim, semper dui tempus mollis aliquam
                libero curabitur.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions className="DialogActions">
            <Button onClick={DialogContractsCancelClose}>
              I’ve changed my mind
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={DialogContractsCancelClose}
            >
              Yes, Proceed{" "}
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={openDialogContractsRenew}
        onClose={DialogContractsRenewClose}
        aria-labelledby="DialogContractsCancel-title"
      >
        <div className="dialogContracts">
          <DialogTitle id="DialogContracts-title">
            <h4>When do you want to renew this contract?</h4>
            <span
              className="material-icons"
              onClick={DialogContractsRenewClose}
            >
              close
            </span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div className="DialogContractInfo">
                <Container>
                  <Row>
                    <Col md="4">
                      <span>Contract ID</span>
                      <h6>123456789</h6>
                    </Col>
                    <Col md="4">
                      <span>Package Type</span>
                      <h6>36 Months - AAEA</h6>
                    </Col>
                    <Col md="4">
                      <span>Expiration Date</span>
                      <h6>08/10/2021</h6>
                    </Col>
                  </Row>
                </Container>
              </div>
              <SelectDataPicker />
              <p>
                Lobortis dis montes dapibus sagittis orci donec aliquet nostra
                imperdiet, cras lacinia sodales elementum accumsan malesuada
                habitant faucibus blandit enim, semper dui tempus mollis aliquam
                libero curabitur.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions className="DialogActions">
            <Button onClick={DialogContractsRenewClose}>cancel</Button>
            <Button
              color="primary"
              variant="contained"
              onClick={DialogContractsRenewClose}
            >
              submit
            </Button>
          </DialogActions>
        </div>
      </Dialog>



      <Dialog
        fullScreen={fullScreen}
        open={openDialogContractsRenewalNotice}
        onClose={DialogContractsRenewalNoticeClose}
        aria-labelledby="DialogContractsCancel-title"
      >
        <div className="dialogContracts">
          <DialogTitle id="DialogContracts-title">
            <h4>Send renewal notice</h4>
            <span
              className="material-icons"
              onClick={DialogContractsRenewalNoticeClose}
            >
              close
            </span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>
                Lobortis dis montes dapibus sagittis orci donec aliquet nostra
                imperdiet, cras lacinia sodales elementum accumsan malesuada
                habitant faucibus blandit enim, semper dui tempus mollis aliquam
                libero curabitur.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions className="DialogActions">
            <Button onClick={DialogContractsRenewalNoticeClose}>cancel</Button>
            <Button
              color="primary"
              variant="contained"
              onClick={DialogContractsRenewalNoticeClose}
            >
              send
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
