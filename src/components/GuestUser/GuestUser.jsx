import React from "react";
import { Container, Row, Col } from "reactstrap";
import Grid from '@material-ui/core/Grid';
import PageHeader from "../Common/pageHeader";
import { Paper, Button, Typography } from "@material-ui/core";
import RightSideBar from './rightSideBar';
import './guestUser.scss';
import SimpleCard from './simpleCard';

export default function Contract() {
	return (
		<React.Fragment>
			<PageHeader headerName="Guest User" />
			<Container className="guest-user">
				<Row>
					<Col>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography component="p"  className="heading-top">Users who have been authorized to access this account</Typography>
							</Grid>
							<Grid item sm={12} md={8} xs={12}>
							<SimpleCard />
							</Grid>

							<Grid item sm={12} md={4} xs={12}>
								<RightSideBar />
								
							</Grid>
						</Grid>

					</Col>
				</Row>
			</Container>




		</React.Fragment>
	);
}
