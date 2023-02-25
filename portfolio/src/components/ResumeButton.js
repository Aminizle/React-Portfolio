import { Button } from "@material-tailwind/react";
import React, { Component } from "react";
import Pdf from "../assets/Resume.pdf";
import { GrDownload } from "react-icons/gr";

class OpenPdfButton extends Component {
  render() {
    return (
      <div className="flex bg-cyan-500 hover:bg-teal-500 hover:shadow-cyan-500/50 hover:scale-110 shadow-xl rounded-md my-16 w-60 mx-auto justify-center">
        <Button className="  rounded-r-none">
          <a href={Pdf} target="_blank" rel="noreferrer">
            View my Resumé
          </a>
        </Button>
        <Button className=" px-4 rounded-l-none px- ">
          <a href={Pdf} download="Pdf" rel="noreferrer">
            <GrDownload className="text-xl text-white " />
          </a>
        </Button>
      </div>
    );
  }
}

export default OpenPdfButton;
