import React from 'react';
import { Route, Switch } from "react-router-dom";
import Contract from "./Contracts/contract";
import Dashboard from "./Dashboard/dashboard";
import QuoteManagement from "./Quotes/QuoteManagement/quotemanagement";
import QuoteGenerator from './Quotes/QuoteGenerator/quoteGenerator';
import QuoteGeneratorSuccess from './Quotes/QuoteGenerator/quoteGeneratorSuccess';
import ManageUsers from './ManageUsers/ManageUsers';
import AccountOverview from './Account/AccountOverview/AccountOverview';
import MyProfile from './Account/myProfile/Profile';
import ContractsSuccess from './Contracts/ContractsSuccess';
import ContractManagement from './Contracts/stepper';
import NotificationPreferences from './NotificationPreferences/NotificationPreferences';
import GuestUser from './GuestUser/GuestUser';
import Header from './Header/Header';
import NavigationMenu from './Navigation/NavigationMenu';
//  Auth Starts
import { PrivateRoute } from '../auth/_components';
import LoginPage from '../auth/LoginPage/LoginPage';
// Auth Ends

export default function Routes() {
        return (
                <Switch>
                        <Route exact path="/login" component={LoginPage} />
                        <React.Fragment>
                                <Header />
                                <NavigationMenu />
                                <PrivateRoute exact path="/" component={Dashboard} />
                                <PrivateRoute path="/contract" component={Contract} />
                                <PrivateRoute path="/quotemanagement" component={QuoteManagement} />
                                <PrivateRoute path="/quoteGenerator" component={QuoteGenerator} />
                                <PrivateRoute path="/quoteGeneratorSuccess" component={QuoteGeneratorSuccess} />
                                <PrivateRoute path="/manageusers" component={ManageUsers} />
                                <PrivateRoute path="/MyProfile" component={MyProfile} />
                                <PrivateRoute path="/accountoverview" component={AccountOverview} />
                                <PrivateRoute path="/contractmanagement" component={ContractManagement} />
                                <PrivateRoute path="/contractsuccess" component={ContractsSuccess} />
                                <PrivateRoute path="/notificationpreferences" component={NotificationPreferences} />
                                <PrivateRoute path="/guestuser" component={GuestUser} />
                        </React.Fragment>
                </Switch>
        );
}