import { Button } from "@material-tailwind/react";
import React, { Component } from "react";
import Pdf from "../assets/Resume.pdf";

class OpenPdfButton extends Component {
  render() {
    return (
      <div className="App">
        <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-wide mt-10 px-4 py-2 rounded-md ml-8">
          <a href={Pdf} target="_blank">
            View my Resumé
          </a>
        </Button>
      </div>
    );
  }
}

export default OpenPdfButton;
