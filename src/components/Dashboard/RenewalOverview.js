import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProgressBarDashBoard from "./ProgressBar/ProgressBarDashBoard";

function RenewalOverview() {
  return (
    <React.Fragment>
      <h2 className="dashboard-heading">Renewal Overview</h2>
      <div className="RenewalOverview">
        <div className="renewalOverview-container">
          <Container>
            <Row>
              <Col xs="3">
                <div className="renewalOverview-content">
                  <div>12 Months</div>
                  <span>Lacus consectetur</span>
                </div>
              </Col>
              <Col xs="3">
                <div className="renewalOverview-content">
                  <div>24 Months</div>
                  <span>Mauris mollis</span>
                </div>
              </Col>
              <Col xs={{ size: 3, offset: 3 }}>
                <div className="renewalOverview-content">
                  <div>36 month</div>
                  <span>Mus dictumst</span>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <ProgressBarDashBoard />
              </Col>
            </Row>
            <Row>
              <Col xs="3">
                <h4>€888.88</h4>
              </Col>
              <Col xs="3">
                <h4>€888.88</h4>
              </Col>
              <Col xs={{ size: 3, offset: 3 }}>
                <h4>€888.88</h4>
              </Col>
            </Row>
            <p>
              Dictumst scelerisque sed iaculis pretium elementum etiam conubia
              semper viverra tempor mauris, platea quis ex hac duis sagittis
              ante ad purus ac, leo aliquet praesent torquent.
            </p>
          </Container>
        </div>
        <div className="renewalOverviewBottom">
          <span class="material-icons">visibility</span>
          <p>
            Magnis vulputate netus fermentum tempus penatibus class ut, ornare a
            blandit habitant amet posuere, platea cursus ultricies ad mi hac.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RenewalOverview;
