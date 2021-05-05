import React from 'react';
import { Typography } from '@material-ui/core';

const Authorization = () => {
  return (
    <>
      <Typography component="h2" color="secondary">Authorization</Typography>
      <p>Upload your authorization here if acting on behalf of a customer:</p>
      <div className="selectfromData">
        <div className="upload-area">
          <label for="file">
            <p>
              <span className="material-icons">attach_file</span>
              <i>Drop files here or{" "}</i>
              <b>select from your computer</b>
            </p>
            <small> Maximum File Size: 3 MB </small>
            <input id="file" type="file" />
          </label>
        </div>
      </div>
    </>
  );
}
export default Authorization;