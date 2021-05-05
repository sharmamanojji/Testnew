import React from 'react';
import DropdownMenu from "./AccountDropdown";
import { Container, Row, Col } from "reactstrap";
const PageHeader = (props) => {
    return (
        <div className="dashboard">
            <Container>
                <Row>
                    <Col lg={{ size: 6 }} >
                        <div className="heading-text">
                            <h2>{props.headerName}</h2>
                        </div>
                    </Col>
                    <Col lg={{ size: 6 }} >
                        <div className="AcntSelectWrapper">
                            <DropdownMenu />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PageHeader