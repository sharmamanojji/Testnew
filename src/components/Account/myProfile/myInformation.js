import React from 'react';
import UserNameField from './profileModule/userName';
import UserField from './profileModule/user';
import PasswordField from './profileModule/passwordField';
import MobilePhoneField from './profileModule/mobilePhoneField';
import EmailField from './profileModule/emailField';

export default function MyInformation() {
    return (
        <div className="profile-module-form">
            <UserField />
            <UserNameField />
            <PasswordField />
            <MobilePhoneField label="Mobile Phone" />
            <MobilePhoneField label="Home Phone" />
            <MobilePhoneField label="Work Phone" />
            <EmailField label="Primary Email" labelValue="joe.doe@utilityco.com" iconValue="edit" />
            <EmailField label="Secondary Email" labelValue="None on file" iconValue="add_box" />
        </div>
    );
}
