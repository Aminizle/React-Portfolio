import { Button } from "@material-tailwind/react";
import React, { Component } from "react";
import Pdf from "../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

class OpenPdfButton extends Component {
  render() {
    return (
      <div className="flex bg-cyan-500 hover:bg-cyan-400 hover:shadow-cyan-400/50 hover:scale-110 shadow-xl rounded-md my-16 w-60 mx-auto justify-between">
        <Button className="px-6 rounded-r-none py-2">
          <a href={Pdf} target="_blank" rel="noreferrer">
            View my Resumé
          </a>
        </Button>
        <Button
          className=" px-4 rounded-l-none bg-cyan-700 pl-3 text-white font-bold"
          title="Click to download resumé"
          download
        >
          <a href={Pdf} download rel="noreferrer">
            <AiOutlineDownload className="text-xl " />
          </a>
        </Button>
      </div>
    );
  }
}

export default OpenPdfButton;
