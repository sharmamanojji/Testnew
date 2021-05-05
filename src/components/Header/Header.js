import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/logo.svg';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import './header.scss';

const useStyles = makeStyles(theme => ({
	badgecolor: { backgroundColor: theme.palette.primary.main, right: '2px', color: '#fff' },
	UserLogo: {
		color: '#088856'
	},
}));

export default function Header() {
	const [dropdownOpen, setDropdownOpen] = React.useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	const [dropdownSwitch, setDropdownSwitch] = React.useState(false);
	const toggleSwitch = () => setDropdownSwitch(prevState => !prevState);
	const classes = useStyles();

	return (
		<header className="HeaderMain d-none d-sm-block">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-12">
						<Link id="logo-container" to="./" className="brand-logo">
							<img src={logo} alt="MainLogo" />
						</Link>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12">
						<ul className="tipTop">
							<li>
								<Icon color="secondary" className={classes.UserLogo}>account_circle</Icon>
								<Dropdown isOpen={dropdownOpen} toggle={toggle}>
									<DropdownToggle nav>
										<span className="UserNameMain">robert reseller</span><i className="material-icons">expand_more</i>
									</DropdownToggle>
									<DropdownMenu className="dropdown-default dropdown-theme" right>
										<DropdownItem to="/myprofile"
											activeClassName='active' tag={RRNavLink}>My Profile</DropdownItem>
										<DropdownItem to="/login"
											activeClassName='active' tag={RRNavLink}>Sign Out</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</li>
							<li>
								<div className="notificationLink">
									<IconButton aria-label="delete">
										<Badge classes={{ badge: classes.badgecolor }} badgeContent={4} color="secondary">
											<i className="material-icons colorb">notifications</i>
										</Badge>
									</IconButton>
								</div>
							</li>
							<li>
								<Dropdown isOpen={dropdownSwitch} toggle={toggleSwitch} className="SwitchIcon">
									<DropdownToggle nav>
										<i className="material-icons colorb">apps</i>
									</DropdownToggle>
									<DropdownMenu className="dropdown-menuSwitch dropdown-theme" right>
										<DropdownItem href="http://q.smartusys.net/energyco/" className="dropdown-item">
											<i className="material-icons">home_work</i><span>Residential</span>
										</DropdownItem>
										<DropdownItem href="http://q.smartusys.net/energy-reseller/" className="dropdown-item selectedItem">
											<i className="material-icons">storefront</i><span>Reseller</span>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}