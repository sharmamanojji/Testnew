import React from 'react';
import { Paper, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import RightSideBanner from '../../assets/images/guestUserBanner.png';
const RightSideBar = () => {
    return (
        <Paper className="rightsideBar">
            <h2>How can we help?</h2>
            <img src={RightSideBanner} alt="guest user" />
            <ul>
                {
                    jsonData.map((data, index) => {
                        return (
                            <li key={index}>
                                <Link to="/">{data} </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Paper>
    );
};

export default RightSideBar;

const jsonData = [
    'Accumsan nostra porttitor donec conubia torquent nibh quisque placerat auctor, primis',
    'Mauris mollis erat urna, sit amet luctus erat scelerisque id?',
    'Phasellus dapibus justo ut lectus mollis, eget venenatis?',
    'Laudem et voluptatem?'
]