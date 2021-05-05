import React from "react";
import { Container, Row, Col } from "reactstrap";
import ContractTable from "./contractTable";
import ContractCards from "./ContractCards";
import PageHeader from "../Common/pageHeader";
import "./contract.scss";

export default function Contract() {
  return (
    <React.Fragment>
      <PageHeader headerName="Contract Management" />
      <Container>
        <Row>
          <Col>
            <ContractCards />
            <ContractTable />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
