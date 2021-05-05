import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ContractKebabMenu from './quoteKebabmenu';

function createData(ID, dateSigned, contractID, customerName, DurationMonth, Expiration, ExpCon) {
    return { ID, dateSigned, contractID, customerName, DurationMonth, Expiration, ExpCon };
}

const rows = [
    createData('100', '08/01/2019', '123456789', 'Everett Daniels', 24, '90 days', '0'),
    createData('101', '08/01/2019', '123456789', 'Mizuki Nova', 36, '46 days', '0'),
    createData('102', '08/01/2019', '123456789', 'Sandra Světlana', 36, '180 days', '0'),
    createData('103', '08/01/2019', '123456789', 'Darren Omar', 24, '22 days', '1'),
    createData('104', '08/01/2019', '123456789', 'Reina Marcela', 48, '106 days', '0'),
    createData('105', '08/01/2019', '123456789', 'Hyeli Soo-Jin', 24, '94 days', '0'),
    createData('106', '08/01/2019', '123456789', 'Michael Thorvald', 36, '277 days', '0')
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'dateSigned', numeric: false, disablePadding: true, label: 'Date Signed' },
    { id: 'contractID', numeric: false, disablePadding: false, label: 'Contract ID' },
    { id: 'customerName', numeric: false, disablePadding: false, label: 'Customer Name' },
    { id: 'DurationMonth', numeric: false, disablePadding: false, label: 'Duration(Months)' },
    { id: 'Expiration', numeric: true, disablePadding: false, label: 'Expiration' },
    { id: 'KebabMenu', numeric: true, disablePadding: false, label: '' },
];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0px 0'
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },

}));

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === "light"
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: "1 1 100%",
    },
    formControl: {
        width: '100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    const [open, setOpen] = React.useState(false);
    const [extDuration, setExtDuration] = React.useState('10');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeSelect = (event) => {
        setExtDuration(event.target.value);
    };
    return (
        <div className="tpButton">
            {numSelected > 0 ? (
                <Button className={classes.title} variant="contained" color="primary" onClick={handleClickOpen}>
                    Extend Quote ({numSelected})
                </Button>
            ) : (
                    <Button className={classes.title} variant="contained" color="primary" id="tableTitle" disabled>
                        Extend Quote (0)
                    </Button>
                )}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="DialogContractsCancel-title"
            >
                <div className="dialogContracts">
                    <DialogTitle id="DialogContracts-title">
                        <h4>How long do you want to extend these quotes?</h4>
                        <span
                            className="material-icons"
                            onClick={handleClose}
                        >
                            close
            </span>
                    </DialogTitle>
                    <DialogContent>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demofilled-label">Extension Duration</InputLabel>
                            <Select
                                labelId="demofilled-label"
                                id="demofilled"
                                value={extDuration}
                                onChange={handleChangeSelect}
                            >
                                <MenuItem value={10}>2 more months</MenuItem>
                                <MenuItem value={20}>3 more months</MenuItem>
                                <MenuItem value={30}>4 more months</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions className="DialogActions">
                        <Button onClick={handleClose}>cancel</Button>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleClose}
                        >
                            OK
            </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
};


EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};


export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('dateSigned');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.ID);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, ID) => {
        const selectedIndex = selected.indexOf(ID);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, ID);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const ContractStepClick = () => {
        window.location.hash = "quoteGenerator";
    }


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className="tbHeader">
                    <FormControl variant="outlined" className="SearchBoxContainer">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            value=""
                            endAdornment={
                                <InputAdornment position="end">
                                    <i className="material-icons">search</i>
                                </InputAdornment>
                            }
                            inputProps={{
                                "aria-label": "type here to filter and search",
                            }}
                            labelWidth={0}
                        />
                    </FormControl>
                    <div className="ContractTopBtns">
                        <Button variant="outlined" color="primary" className="NewContract" onClick={ContractStepClick}>
                            <AddIcon /> New Quote
                    </Button>
                        <EnhancedTableToolbar numSelected={selected.length} />
                    </div>
                </div>

                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.ID);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover

                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.ID}
                                            selected={isItemSelected}
                                        >
                                            <TableCell width="5%" padding="checkbox">
                                                <Checkbox onClick={(event) => handleClick(event, row.ID)}
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell width="15%" component="th" id={labelId} scope="row" padding="none">
                                                {row.dateSigned}
                                            </TableCell>
                                            <TableCell width="15%" align="left">{row.contractID}</TableCell>
                                            <TableCell width="30%" align="left">{row.customerName}</TableCell>
                                            <TableCell width="10%" align="left">{row.DurationMonth}</TableCell>
                                            {row.ExpCon == 0 &&
                                                <TableCell width="15%" align="right">{row.Expiration}</TableCell>
                                            }
                                            {row.ExpCon == 1 &&
                                                <TableCell width="15%" align="right">
                                                    <div className="withIconBox">
                                                        <i class="material-icons redWarning">warning</i>
                                                        {row.Expiration}
                                                    </div>
                                                </TableCell>
                                            }
                                            <TableCell width="10%" align="right"><ContractKebabMenu /></TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
