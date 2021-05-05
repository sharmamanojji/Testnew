import React from "react";
import Button from "@material-ui/core/Button";
import { Container, Row, Col } from "reactstrap";

function ContractsSuccess() {
  const NavContract = () => {
    window.location.hash = "contract";
  }
  
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col lg={{ size: 6 }} className="mCenter">
            <div className="ContractsSuccess">
              <span className="material-icons">check_circle </span>
              <h4>Success!</h4>
              <p>
                You have successfully updated this contract. The changes will go
                into effect on the customer’s next billing cycle. A confirmation
                email will be sent to the customer to inform them of a change in
                terms.
              </p>
              <Button color="primary" variant="contained" onClick={NavContract}> Done</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ContractsSuccess;
