import React from "react";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub,    
  } from "react-icons/ai";
  import { SiCodewars } from "react-icons/si";
  import { MdEmail } from "react-icons/md";

function FooterMenu() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <nav className="container mx-auto">
      <div>
          <h2 className="flex justify-center dark:text-gray-200 ">
            <a
              target="_blank" rel="noreferrer"
              href="https://www.codewars.com/users/DevAmeenM"
            ></a>
          </h2>
          <a
            className="flex justify-center hover:scale-125"
            target="_blank" rel="noreferrer"
            href="https://www.codewars.com/users/DevAmeenM"
          >
            <img
              src="https://www.codewars.com/users/DevAmeenM/badges/micro"
              alt="codewars badge large"
            />
          </a>
        </div>
        <ul className="flex justify-center mt-5 text-cyan-500 cursor-pointer text-3xl ">
          <li>
            <a href="https://twitter.com/DevAmeenM" target="_blank" rel="noreferrer">
              <AiFillTwitterCircle className="mx-5 hover:scale-125 hover:text-teal-500" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ameen-mohiyuddin/" target="_blank" rel="noreferrer">
              <AiFillLinkedin className="mx-5 hover:scale-125 hover:text-teal-500" />
            </a>
          </li>

          <li>
            <a href="https://github.com/Aminizle" target="_blank" rel="noreferrer">
              <AiFillGithub className="mx-5 hover:scale-125 hover:text-teal-500" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw" target="_blank" rel="noreferrer">
              <AiFillYoutube className="mx-5 hover:scale-125 hover:text-teal-500" />
            </a>
          </li>
          <li>
            <a className="font-medium text-xl " href="#contact" >
            <MdEmail className="mx-5 hover:scale-125 text-3xl hover:text-teal-500" />             
            </a>
          </li>
        </ul>    
        
      </nav>
    </footer>
  );
}

export default FooterMenu;