import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RightSideBar from './rightSideBar';
import './profile.scss';
import UserNameField from './profileModule/userName';
import UserField from './profileModule/user';
import PasswordField from './profileModule/passwordField';
import MobilePhoneField from './profileModule/mobilePhoneField';
import EmailField from './profileModule/emailField';
import BrokerageFee from './profileModule/brokerageFee';
import UploadLogo from './profileModule/uploadLogo'; 
import CompanyDescription from './profileModule/companyDescription';
export default function OtherSettings() {
    return (
        <>
            <Typography component="h2" color="primary" className="heading-top mt30 pb15">other settings</Typography>
            <div className="profile-module-form">
                <BrokerageFee label="Large company brokerage fee (%)" value="2.00%"/>
                <BrokerageFee label="small company brokerage fee (%)" value="1.00%"/>
                <UploadLogo />
                <BrokerageFee label="brokerage fee (small customer)" value="1.00%"/>
                <BrokerageFee label="brokerage fee (small customer)" value="2%"/>
                <CompanyDescription />
            </div>

        </>
    );
}
