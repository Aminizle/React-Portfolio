import React from "react";
import marvel from "../assets/marvel-720p.png";
import nasa from "../assets/nasa-720p.png";
import expression from "../assets/expression-720p.png";
import travel from "../assets/travel-720p.png";
import { AiFillGithub } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { Button } from "@material-tailwind/react";

const PastProjects = () => {
  return (
    <div className="flex flex-wrap justify-center text-white ">
      <div className="w-full lg:w-1/2 bg-gradient-to-l from-cyan-500 to-teal-500 rounded-lg">
        <a href="https://ameentravel.netlify.app/" target="_blank">
          <img
            src={travel}
            alt="Project 3"
            className="rounded-lg rounded-b-none"
          />
        </a>
        <div className="grid grid-cols-2 m-3">
          <p className="text-left text-sm">
            A single-page travel site, designed to be fully responsive and
            optimized for all screen sizes, offering a wealth of features that
            prioritize user experience. The site features a convenient
            navigation menu, seamless integration with social media, and a
            visually stunning video background.
          </p>
          <div>
            <p className="text-center text-sm">Tech Stack:</p>
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
            </ul>
            <div className="inline-flex items-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-wide mt-10 dark:text-white px-4 py-2 rounded-md ml-8 shadow-xl hover:shadow-cyan-500/50 hover:scale-125 border-purple-800">
                <a href="https://ameentravel.netlify.app/" className="inline-flex items-center">
                  
                  see project live<GiAirplaneDeparture className="mx-5 hover:scale-125" />
                </a>
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-wide mt-10 dark:text-white px-4 py-2 rounded-md ml-8 shadow-xl hover:shadow-cyan-500/50 hover:scale-125 border-purple-800">
                <a href="https://github.com/Aminizle/travel-site" className="inline-flex items-center">
                  see project on Github
                  <AiFillGithub className="mx-5 hover:scale-125" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gradient-to-l from-cyan-500 to-teal-500 rounded-lg ">
        <img src={marvel} alt="Project 1" className="rounded-lg" />
        <div className="grid grid-cols-2 m-3">
          <p className=" text-left text-sm">
            Embark on an epic journey through the Marvel Cinematic Universe on
            this site! Get the inside scoop straight from Marvel, with the
            latest information powered by their very own API. Experience the
            magic of your favorite movies like never before with stunning cinema
            posters, heart-pumping trailers,director information, IMDB links,
            social media, and release dates all at your fingertips. Dive into
            the story and immerse yourself in the world of each film with
            engaging descriptions that bring the action to life.
          </p>
          <div>
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gradient-to-l from-cyan-500 to-teal-500 rounded-lg ">
        <img src={nasa} alt="Project 3" className="rounded-lg rounded-b-none" />
        <div className="grid grid-cols-2 m-3 ">
          <p className="text-left text-sm">
            Delve into an intergalactic journey of discovery with our NASA
            Picture of the Day Explorer! Experience breathtaking images from the
            vastness of space with a mesmerizing video background. Choose any
            date you like and bask in the beauty of the cosmos, with a simple
            yet powerful interface that brings the universe to your fingertips.
            Get up close and personal with each picture, accompanied by a
            descriptive title and insightful explanation. And don't forget to
            share your interstellar adventures with your friends and followers
            through our integrated social media links. Get ready for a truly
            out-of-this-world experience!
          </p>
          <div>
            <p className="text-center text-sm">Tech Stack:</p>
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gradient-to-l from-cyan-500 to-teal-500 rounded-lg ">
        <img
          src={expression}
          alt="Project 3"
          className="rounded-lg rounded-b-none"
        />
        <div className="grid grid-cols-2 m-3 ">
          <p className="text-left text-sm">
            Unleash your creativity and let the world bask in the brilliance of
            your photography with our fully responsive website, custom-tailored
            to showcase your greatest shots! With a sleek and user-friendly
            interface, you can effortlessly display your masterpieces for all to
            see. Showcase your artistic vision and tell your story through your
            lens with ease, and make it easy for your fans to stay connected
            with you through our seamlessly integrated social media links. Get
            ready to take your photography to the next level and captivate the
            world with your talent!
          </p>
          <div>
            <p className="text-center text-sm">Tech Stack:</p>
            <ul>
              <li>HTML 5</li>
              <li>Sass</li>
              <li>CSS 3</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PastProjects;
