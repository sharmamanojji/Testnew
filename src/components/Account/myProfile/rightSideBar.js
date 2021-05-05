import React from 'react';
import { Button, Typography } from '@material-ui/core';
import FaqBannerImg from '../../../assets/images/faqbanner.jpg';
const RightSideBar = () => {
    return (
        <>
            <div className="rightSidebar">
                <Typography component="h2">How can We Help?</Typography>
                <img src={FaqBannerImg} alt="profile banner" />
                <div className="faqData">
                    <ul>
                        {
                            RightSidebarData.map((label, index) => {
                                return (
                                    <li key={index}>
                                        <label>{label.data} </label>
                                        <span className="material-icons">keyboard_arrow_right</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Button color="primary" className="view-more">View More FAQs</Button>
                </div>
            </div>
        </>
    );
};

export default RightSideBar;


const RightSidebarData = [
    { data: 'Nibh blandit ligula metus sodales fusce taciti lacus magna tortor ac nostra fames elit' },
    { data: 'Mauris mollis erat urna, sit amet luctus erat scelerisque id?' },
    { data: 'Phasellus dapibus justo ut lectus mollis, eget venenatis?' },
    { data: 'Condimentum platea urna vehicula?' },
]