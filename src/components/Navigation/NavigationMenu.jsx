import React, { useEffect } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Container, Col, ListGroupItem, ListGroup
} from 'reactstrap';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import './navigationmenu.css';


const useStyles = makeStyles((theme) => ({
  Navbarfirst: {
    flex: 1
  }
}));

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const nav = document.querySelector('nav.navbar-dark');
    function handleScroll() {
      if (window.scrollY > 70) {
        nav.classList.add('fixed-nav');
        // document.body.style.paddingTop = nav.offsetHeight+'px';
      } else {
        nav.classList.remove('fixed-nav');
      }
    }
    window.addEventListener('scroll', handleScroll);
  });

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const classes = useStyles();
  return (
    <Navbar color='faded' dark expand role='navigation' className="d-none d-sm-block" expand="md">
      <Container>
        <NavbarToggler type='button' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={clsx(classes.Navbarfirst, 'ml-auto')} navbar>
            <NavItem>
              <NavLink id="dtHome" activeClassName='active' tag={RRNavLink} exact to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="dtContract" activeClassName='active' tag={RRNavLink} to='/contract'>Contracts</NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav id="dtQuotes">
                Quotes<i className="material-icons">keyboard_arrow_down</i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-default MegaMenu animate slideIn">
                <div className="container">
                  <Col lg="3" sm="6" xs="12" className="float-left">
                    <ListGroup>
                      <ListGroupItem><DropdownItem data-name="dtQuotes" activeClassName='active' tag={RRNavLink} to="/quotemanagement">Quote Management</DropdownItem></ListGroupItem>
                      <ListGroupItem><DropdownItem data-name="dtQuotes" activeClassName='active' tag={RRNavLink} to='/quotegenerator'>Quote Generator</DropdownItem></ListGroupItem>
                    </ListGroup>
                  </Col>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav>
              <DropdownToggle nav id="dtAccount">Account
              <i className="material-icons">keyboard_arrow_down</i></DropdownToggle>
              <DropdownMenu className="dropdown-default MegaMenu animate slideIn">
                <div className="container"><Col lg="3" sm="6" xs="12" className="float-left">
                  <ListGroup>
                  <ListGroupItem><DropdownItem data-name="Account" activeClassName='active' tag={RRNavLink} to='/accountoverview'>Account Overview</DropdownItem></ListGroupItem>
                    <ListGroupItem><DropdownItem data-name="Account" activeClassName='active' tag={RRNavLink} to='/manageusers'>Manage Users</DropdownItem></ListGroupItem>
                    <ListGroupItem><DropdownItem data-name="Account" activeClassName='active' tag={RRNavLink} to='/myprofile' >My Profile</DropdownItem></ListGroupItem>
                    
                  </ListGroup>
                </Col>
                  <Col lg="3" sm="6" xs="12" className="float-left">
                    <ListGroup>
                    <ListGroupItem><DropdownItem data-name="Account" activeClassName='active' tag={RRNavLink} to="/guestuser">Guest User</DropdownItem></ListGroupItem>
                    <ListGroupItem><DropdownItem data-name="Account" activeClassName='active' tag={RRNavLink} to='/notificationpreferences'>Notification Preferences</DropdownItem></ListGroupItem>
                      {/*   <ListGroupItem><DropdownItem data-name="myorder" activeClassName='active' tag={RRNavLink} to='/myOrder'>My Order</DropdownItem></ListGroupItem> */}
                    </ListGroup>
                  </Col>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className='ml-auto navbar-right' navbar>
            <NavItem>
              <NavLink id="dtOutages" activeClassName='active' tag={RRNavLink} to='/contactus'><i className="material-icons">offline_bolt</i>Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="dthelp" activeClassName='active' tag={RRNavLink} to='/logout'><i className="material-icons">help</i>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}