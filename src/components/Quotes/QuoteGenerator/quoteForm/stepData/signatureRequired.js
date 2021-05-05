import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import SignatureCanvas from 'react-signature-canvas'

const SignatureRequired = () => {
    const [requiredImg,setrequiredImg]=useState(false);
    let sigaPad = {};
    const clear =()=>{
        sigaPad.clear();
        setrequiredImg(false)
    }
    const reuiredHide =()=>{
        setrequiredImg(true)
    }
    return (
        <>
        <div className="signature-required" onMouseDown={reuiredHide}>
            {
                !requiredImg &&  (<div className="singnatureRe">
                <span className="material-icons">edit</span>
                <label>Signature required</label>
                </div>)
            }
           <SignatureCanvas penColor='green'
            canvasProps={{width: 500, height: 100, className: 'sigCanvas'}}
            ref={(ref) => { sigaPad = ref }}  />
        </div>
        <Typography color="secondary"  onClick={clear} className="mt-15">Clear signature </Typography>
        </>
    );
};

export default SignatureRequired;