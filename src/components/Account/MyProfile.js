import React from "react";
import Stepper from "../Contracts/stepper";
import './MyProfile.scss';

import { Container, Row, Col } from "reactstrap";

function MyProfile() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="6" style={{ backgroundColor: "#fff" }}>
            <Stepper />
          </Col>
          <Col>
            <div className="stepper-right">
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Consectetur adipiscing elit. Praesent euismod tellus sit amet
                ante vulputate, eget mollis orci rutrum. Quisque at lacus at mi
                iaculis volutpat. Duis sed tellus sit amet ipsum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyProfile;
