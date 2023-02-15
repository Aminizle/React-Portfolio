import { Button } from "@material-tailwind/react";
import React, { Component } from "react";
import Pdf from "../assets/Resume.pdf";

class OpenPdfButton extends Component {
  render() {
    return (
      <div>
        <Button className=" bg-cyan-500 hover:bg-teal-500 text-wide my-16 dark:text-white px-4 py-2 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 mx-auto">
          <a href={Pdf} target="_blank" rel="noreferrer">
            View my Resumé
          </a>
        </Button>
      </div>
    );
  }
}

export default OpenPdfButton;
