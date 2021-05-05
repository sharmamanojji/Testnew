import React from "react";
import { Container, Row, Col } from "reactstrap";
import Grid from '@material-ui/core/Grid';
import PageHeader from "../../Common/pageHeader";
import { Paper, Button, Typography } from "@material-ui/core";
import './accountOverview.scss';
import AccountSummary from './accountSummary';
import MyPrograms from './myPrograms';
import MailingAddress from './mailingAddress';
import Faq from '../../Common/faq';
import { Link } from "react-router-dom";

export default function Contract() {
	return (
		<React.Fragment>
			<PageHeader headerName="account overview" />
			<Container className="account-overview">
				<Row>
					<Col>
						<Grid container className="profile-module" spacing={3}>
							<Grid item xs={12}>
								<Typography component="h2" color="primary" className="heading-top">account Summary</Typography>
							</Grid>
							<Grid item sm={12} md={8} xs={12}>
								<AccountSummary />
								<MyPrograms />
								<MailingAddress />
							</Grid>

							<Grid item sm={12} md={4} xs={12}>
								<Faq />
								<Paper className="need-update">
									<Link to="/">Need to update phone or email?</Link>
									<Button variant="contained" color="primary">Manage My Profile</Button>
								</Paper>
							</Grid>
						</Grid>

					</Col>
				</Row>
			</Container>




		</React.Fragment>
	);
}
