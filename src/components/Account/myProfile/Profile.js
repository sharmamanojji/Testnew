import React from "react";
import { Container, Row, Col } from "reactstrap";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PageHeader from "../../Common/pageHeader";
import MyInformation from './myInformation';
import OtherSettings from './otherSettings';
import RightSideBar from './rightSideBar';
import './profile.scss';

export default function Contract() {
  return (
    <React.Fragment>
      <PageHeader headerName="my profile" />
      <Container>
        <Row>
          <Col>

            <Grid container className="profile-module" spacing={3}>
              <Grid item xs={12}>
                <Typography component="h2" color="primary" className="heading-top">My Information</Typography>
              </Grid>
              <Grid item sm={12} md={8} xs={12}>
                <MyInformation />
                <OtherSettings />
              </Grid>
              <Grid item sm={12} md={4} xs={12}>
                <Grid className="profile-right">
                  <RightSideBar />
                </Grid>
              </Grid>
            </Grid>

          </Col>
        </Row>
      </Container>




    </React.Fragment>
  );
}
