import { Button } from "@material-tailwind/react";
import React, { Component } from 'react';
import Pdf from '../assets/Resume.pdf';



class OpenPdfButton extends Component {

  render() {

    return (
      
        <div className = "App">
          <a href = {Pdf} target = "_blank">Download Pdf</a>
        </div>
    );

  }
}

export default OpenPdfButton;