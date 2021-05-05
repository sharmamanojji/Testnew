import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from "reactstrap";
import PageHeader from "../../Common/pageHeader";
import "./quoteGenerator.scss";
import Quote from './quote';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        border: 'solid 1px #dbdbdb'
    },
}));

export default function Contract() {
    const classes = useStyles();
    return (
        <React.Fragment>
           
            <PageHeader headerName="Quote Generator"/>
                
            <Container>
                <Row>
                    <Col>
                        <Quote />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}