import React from 'react';
import { Container, Row, Col } from "reactstrap";
import ContractTable from './quoteTable';
import PageHeader from "../../Common/pageHeader";
import "./quote.scss";

export default function Contract() {
    return (
        <React.Fragment>
            <PageHeader headerName="Quote Management"/>
            <Container>
                <Row>
                    <Col>
                        <ContractTable />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}