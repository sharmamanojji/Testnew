import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Container, Col } from 'reactstrap';
import './footer.scss';

export default function Footer() {
    return (
        <footer className="FooterMain">
            <section className="skinny-footer">
                <Container>
                    <Grid className="iPadReverse">
                        <Col lg="12" sm="12" xs="12">
                            <ul className="group-links">
                                <li><Link to="/"><span>Privacy Policy</span></Link></li>
                                <li><Link to="/"><span>Privacy Notice</span></Link></li>
                                <li><Link to="/"><span>Terms and Conditions</span></Link></li>
                            </ul>
                        </Col>
                        <Col lg="12" sm="12" xs="12">
                            <div className="copyright">
                                <p>Energy Co.® registered trademarks of Energy Co.</p>
                                <p>© 1998-2019 Energy Co.®. The trademarks used herein are the property of their respective owners. All rights reserved.</p>
                            </div>
                        </Col>
                    </Grid>
                </Container>
            </section>
        </footer>
    );
}