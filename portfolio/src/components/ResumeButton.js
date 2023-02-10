import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

const OpenPdfButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    window.open("../public/Resume.pdf", "_blank");
    setIsLoading(false);
  };

  return (
    <Button onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Open PDF"}
    </Button>
  );
};

export default OpenPdfButton;