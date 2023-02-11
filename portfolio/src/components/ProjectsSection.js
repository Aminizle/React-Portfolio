import React from "react";
import marvel from "../assets/marvel-720p.png";
import nasa from "../assets/nasa-720p.png";
import expression from "../assets/expression-720p.png";
import travel from "../assets/travel-720p.png";

const PastProjects = () => {
  return (
    <div className="flex flex-wrap justify-center text-white">
      <div className="w-full lg:w-1/2 p-3">
        <img src={travel} alt="Project 3" className="rounded-lg" />
        <p className="mt-3 text-center text-sm">Project 3 Description</p>
      </div>
      <div className="w-full lg:w-1/2 p-3">
        <img src={marvel} alt="Project 1" className="rounded-lg" />
        <p className="mt-3 text-center text-sm">Project 1 Description</p>
      </div>
      <div className="w-full lg:w-1/2 p-3">
        <img src={nasa} alt="Project 2" className="rounded-lg" />
        <p className="mt-3 text-center text-sm">Project 2 Description</p>
      </div>
      <div className="w-full lg:w-1/2 p-3">
        <img src={expression} alt="Project 3" className="rounded-lg" />
        <p className="mt-3 text-center text-sm">Project 3 Description</p>
      </div>
    </div>
  );
};
export default PastProjects;
