import React from 'react';
import { Paper,Button,Typography,Grid } from "@material-ui/core";
const AccountSummary = () => {
    return (
        <>
                <Paper className="account-detail">
                    <h5>Account Nickname: power co. reseller
							<span className="material-icons">edit</span>
                    </h5>
                    <Typography component="label" className="accNumber">Reseller Account Number</Typography>
                    <Typography component="h4">00-88888888</Typography>
                    <Typography component="p">6040 University Ave Anytown PA  12345</Typography>
                    <div className="button-group">
                        <Button type="submit" variant="outlined" color="secondary">Edit account</Button>
                        <Button type="submit" variant="outlined" color="secondary"> manage users </Button>
                    </div>
                </Paper>
            
        </>
    );
};

export default AccountSummary;