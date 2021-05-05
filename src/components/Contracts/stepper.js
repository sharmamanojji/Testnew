import React from "react";
import MultiStep from "./Multi";
import { Container, Row, Col } from "reactstrap";
import { steps } from "./stepper/stepmain";
import PageHeader from "../Common/pageHeader";
import "./stepper.scss";

class Stepper extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader headerName="Contract Management" />
        <Container>
          <Row>
            <Col lg="7">
              <div className="quote-module__form">
                <div className="containerWrapper">
                  <div className="containerWrapper">
                    <h1>modify contract</h1>
                    <MultiStep steps={steps} />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div className="contactStepperRight">
                <h4>Lorem ipsum dolor sit amet</h4>
                <p>
                  Consectetur adipiscing elit. Praesent euismod tellus sit amet
                  ante vulputate, eget mollis orci rutrum. Quisque at lacus at
                  mi iaculis volutpat. Duis sed tellus sit amet ipsum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Stepper;
