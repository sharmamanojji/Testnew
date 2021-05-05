import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Container } from "@material-ui/core";
import { Col, Row } from "reactstrap";
import TextFeild from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

const StyledTableCell = withStyles((theme) => ({}))(TableCell);

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Everett Daniels", "Reseller", "Active"),
  createData("Mizuki Nova", "Admin", "Inactive"),
  createData("Sandra Světlana", "Reseller", "Inactive"),
  createData("Darren Omar", "Guest", "Request Sent"),
  createData("Darren Omar", "Reseller", "Inactive"),
  createData("Reina Marcela", "Reseller", "Inactive"),
  createData("Hyeli Soo-Jin", "Guest", "Active"),
  createData("Michael Thorvald", "Reseller", "Inactive"),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  marginBottom: {
    marginBottom: "20px",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ManageUsersTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="ManageUsersTableHeading">
        <h3>Invite, edit, and manage users who have access to this portal.</h3>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
          Add User
        </Button>
      </div>
      <TableContainer component={Paper} className="ManageUsersTable">
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell>role</StyledTableCell>
              <StyledTableCell>status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }}>{row.calories}</TableCell>
                <TableCell style={{ width: 160 }}>{row.fat}</TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="addUserDialog">
          <div className="closeButtonDialog">
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
          <Container>
            <Row>
              <Col md={{ size: 6, offset: 3 }}>
                <h2>Invite User</h2>
                <p>
                  Phasellus mollis sollicitudin nisl, in sagittis nisi dapibus
                  non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <form noValidate autoComplete="off">
                  <TextFeild
                    id="firstName"
                    className={`w-100 ${classes.marginBottom}`}
                    label="First Name"
                    variant="filled"
                    inputProps={{
                      "aria-label": "First Name",
                    }}
                  />
                  <TextFeild
                    id="lastName"
                    className={`w-100 ${classes.marginBottom}`}
                    label="Last Name"
                    variant="filled"
                    inputProps={{
                      "aria-label": "Last Name",
                    }}
                  />
                  <TextFeild
                    id="emailAddress"
                    className={`w-100 ${classes.marginBottom}`}
                    label="Email Address"
                    variant="filled"
                    inputProps={{
                      "aria-label": "Email Address",
                    }}
                  />
                  <TextFeild
                    id="phoneNumber"
                    className={`w-100 ${classes.marginBottom}`}
                    label="Phone Number"
                    variant="filled"
                    inputProps={{
                      "aria-label": "Phone Number",
                    }}
                  />
                </form>

                <DialogActions>
                  <Button onClick={handleClose}>cancel</Button>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClose}
                  >
                    INVITE
                  </Button>
                </DialogActions>
              </Col>
            </Row>
          </Container>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
