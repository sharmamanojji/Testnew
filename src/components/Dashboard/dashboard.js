import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./dashboard.scss";
import PageHeader from "../Common/pageHeader";
import DashboardCards from "./DashboardCards";
import RenewalOverview from "./RenewalOverview";
import DashboardPromotions from "./DashboardPromotions";
import QuoteConversionRate from "./QuoteConversionRate";

function Dashboard() {
  return (
    <React.Fragment>
      <PageHeader headerName="Dashboard" />
      <Container>
        <Row>
          <Col>
            <DashboardCards />
            <QuoteConversionRate />
            <RenewalOverview />
            <DashboardPromotions />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
