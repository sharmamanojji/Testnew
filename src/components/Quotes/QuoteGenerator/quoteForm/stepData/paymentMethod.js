import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { InputFormField } from '../../Application/Input';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button, List, ListItem, Avatar, Grid } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilledInput from '@material-ui/core/FilledInput';
import Checkbox from '@material-ui/core/Checkbox';

import AmexCard from '../../../../../assets/images/AmexCard.png';
import VisaCard from '../../../../../assets/images/visaCard.png';
import MasterCard from '../../../../../assets/images/masterCard.png';
import DiscoverCard from '../../../../../assets/images/discoverCard.png';
import MaestroCard from '../../../../../assets/images/MaestroCard.png';


const PayMentMethod = () => {
    const [value, setValue] = React.useState('BankAccount');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>

            <Typography component="h2" color="secondary">payment method</Typography>
            <FormControl component="fieldset" className="mb-30">
                <RadioGroup row aria-label="account" name="account" value={value} onChange={handleChange}>
                    <FormControlLabel value="BankAccount" control={<Radio />} label="Bank Account" />
                    <FormControlLabel value="creditDebit" control={<Radio />} label="Credit/Debit Card" />
                </RadioGroup>
            </FormControl>
            {
                value === 'BankAccount' ? <BankAccountField /> : <CreditDebit />
            }


        </>
    );
}
export default PayMentMethod;


const BankAccountField = () => {
    return (
        <>
            <form>
                <InputFormField label="Routing Number" id="routingNumber" />
                <InputFormField label="Bank Name" id="bankName" />
                <InputFormField label="Bank Account Number" id="bankaccNo" />
                <InputFormField label="Retype Bank Account Number" id="bankaccnore" />
            </form>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    Fcontainer: {
        marginTop: 50,
    },
    formControl: { width: '100%' }

}));

const CreditDebit = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({});
    const [state, setState] = React.useState({ condition: false });
    const [BankAccount, setBankAccount] = React.useState(true);
    const [CreditDebitCard, setCreditDebitCard] = React.useState(false);
    const [calDropdown, setCalDropdown] = React.useState();
    const [calYearDropdown, setcalYearDropdown] = React.useState();
    const [accounttype, setAge] = React.useState('Account Type');

    const handleClickBankAC = () => {
        setBankAccount(true); setCreditDebitCard(false);
        setState({ condition: false })
    };
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleClickCreditDebit = () => {
        setBankAccount(false); setCreditDebitCard(true);
        setState({ condition: false })
    };

    const [valuebankAC, setCreditDebit] = React.useState('bankac');

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleChangeAccount = event => {
        setCreditDebit(event.target.value);
    };
    const handleChangeMonth = event => {
        setCalDropdown(event.target.value);
    };
    const handleChangeYear = event => {
        setcalYearDropdown(event.target.value);
    };

    return (
        <div className="creditdebitcarddetails">
            <Grid className="AcceptedCardsList">
                <label>Accepted Cards: </label>
                <ul>
                    <li><img src={AmexCard} alt="AmericanExpressCard" /></li>
                    <li><img src={VisaCard} alt="VisaCard" /></li>
                    <li><img src={MasterCard} alt="MasterCard" /></li>
                    <li><img src={DiscoverCard} alt="DiscoverCard" /></li>
                    <li><img src={MaestroCard} alt="MaestroCard" /></li>
                </ul>
            </Grid>

            <TextField
                id="CardNumber"
                label="Card Number"
                className={'TextFieldWrapper editFields w-100'}
                name="CardNumber"
                margin="normal"
                variant="filled"
            />

            <Grid component="div" className="CardvalidityDetails">
                <Grid component="div" className="CardExpirySection w-100">
                    <Grid container spacing={3}>
                        <Grid component="div" className="CardMonth" item xs={4}>
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel id="CardExpiryMonthSelect">Month</InputLabel>
                                <Select
                                    labelId="CardExpiryMonthSelect"
                                    id="CardExpiryMonth"
                                    value={calDropdown}
                                    onChange={handleChangeMonth}
                                    input={<FilledInput name="MonthSelect" id="MonthSelect" />}
                                    name="CardExpiry">
                                    {MonthList.map((option, Index) => (
                                        <MenuItem id={'Month' + Index} key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid component="div" className="CardYear" item xs={4}>
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel id="CardExpiryYearSelect">Year</InputLabel>
                                <Select
                                    labelId="CardExpiryYearSelect"
                                    id="CardExpiryYear"
                                    value={calYearDropdown}
                                    onChange={handleChangeYear}
                                    input={<FilledInput name="YearSelect" id="YearSelect" />}>
                                    {YearList.map((Item, Index) => (
                                        <MenuItem id={'year' + Index} key={Item.value} value={Item.value}>
                                            {Item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid component="div" className="CardCvvSection cvvField" item xs={4}>
                            <TextField
                                id="CvvNo"
                                label="CVV"
                                className={'TextFieldWrapper editFields'}
                                value=""
                                name="CVV"
                                margin="normal"
                                variant="filled"
                            />
                            <Tooltip placement="right" title="This is the number on backside of your card.">
                                <IconButton aria-label="This is the number on backside of your card.">
                                    <i className="material-icons">info_outline</i>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>

                    <Grid component="div" className={'addaccountdisclaimer'}>
                        <i className="material-icons">info_outline</i>
                        <span>Pay your bill online for free using your bank account and routing number or pay with your debit/credit card for a small fee.</span>
                    </Grid>
                </Grid>

            </Grid>

        </div>
    )
}





const MonthList = [
    { value: 'Jan', label: 'January' },
    { value: 'Feb', label: 'February' },
    { value: 'Mar', label: 'March' },
    { value: 'Apr', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'Jun', label: 'June' },
    { value: 'Jul', label: 'July' },
    { value: 'Aug', label: 'August' },
    { value: 'Sep', label: 'September' },
    { value: 'Oct', label: 'October' },
    { value: 'Nov', label: 'November' },
    { value: 'Dec', label: 'December' },
];

const YearList = [
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
    { value: '2026', label: '2026' },
    { value: '2027', label: '2027' },
    { value: '2028', label: '2028' },
    { value: '2029', label: '2029' },
    { value: '2030', label: '2030' },
    { value: '2031', label: '2031' },
];
