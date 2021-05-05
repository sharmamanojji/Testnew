
import React from 'react';
import { Card } from '@material-ui/core';
import HorizontalLabelPositionBelowStepper from '../stepper';
import './quoteForm.scss';

const InquiryForm = () =>{
    return(
        <Card className="quote-module__form">
            <HorizontalLabelPositionBelowStepper/>           
        </Card>
    )
}

export default InquiryForm;