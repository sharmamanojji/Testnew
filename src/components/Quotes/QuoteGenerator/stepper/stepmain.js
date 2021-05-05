import React from 'react'
import StepOne from './step-1'
import StepTwo from './step-2'
import StepThree from './step-3'
import StepFour from './step-4'
const steps = 
    [
      {name: 'Step 1: customer lookup', component: <StepOne/>},
      {name: 'Step 2: Select Package', component: <StepTwo/>},
      {name: 'Step 3: customer information', component: <StepThree/>},
      {name: 'Step 4: Review & Confirm', component: <StepFour/>}
    ]

export { steps }