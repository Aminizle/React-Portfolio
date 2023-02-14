import React from "react";
import marvel from "../assets/marvel-720p.png";
import nasa from "../assets/nasa-720p.png";
import expression from "../assets/expression-720p.png";
import travel from "../assets/travel-720p.png";
import { AiFillGithub, AiFillCamera } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { GoTelescope } from "react-icons/go";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { Button } from "@material-tailwind/react";

const PastProjects = () => {
  return (
    <section id="Projects">
      <div>
        <h3 className="text-3xl mb-5 md:text-4xl max-w-lg mx-auto dark:text-gray-200">
          Projects
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
          Step into a world of creativity, innovation and user-centered design.
          In my projects section, you will discover a portfolio of works that
          showcase my passion for pushing the boundaries of what's possible.
          With a focus on delivering seamless{" "}
          <span className="text-cyan-500"> user experience</span>, I have
          leveraged the power of <span className="text-cyan-500"> API's </span>{" "}
          to bring data from some of the most exciting sources to life. From
          exploring the depths of space with NASA to diving into the Marvel
          Cinematic Universe, my projects are a testament to my ability to bring
          your wildest ideas to life.
          <br>
          </br> 
          <VscDebugBreakpointLog className="my-2 mx-auto text-cyan-600" />          
          So, buckle up and prepare for a journey
          through the best that <span className="text-cyan-500"> design </span>{" "}
          and technology have to offer.
        </p>
      </div>

      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-white max-width">
        <div className="basis-1/3 flex-1 rounded-lg">
          <a href="https://ameentravel.netlify.app/" target="_blank" rel="noreferrer">
            <img src={travel} alt="Project 3" className="rounded-lg " />
          </a>
          <div className="grid md:grid-cols-2 m-3">
        
            <p className="text-left text-sm">  <span className="text-center text-lg font-bold">Travel More, Worry Less</span><br></br>
              A single-page travel site, designed to be fully responsive and
              optimized for all screen sizes, offering a wealth of features that
              prioritize user experience. The site features a convenient
              navigation menu, seamless integration with social media, and a
              visually stunning video background.
            </p>
            <div>
              <p className="text-center text-lg font-bold">Tech Stack:</p>
              <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
              </ul>
              <div className="inline-flex items-center my-2">
                <Button className="mx-1 bg-cyan-500 hover:bg-teal-500 text-wide dark:text-white p-1 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 ">
                  <a
                    href="https://ameentravel.netlify.app/"
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live Site
                    <GiAirplaneDeparture className="ml-2 hover:scale-125" />
                  </a>
                </Button>
                <Button className="mx-1 bg-cyan-500 hover:bg-teal-500 text-wide dark:text-white p-1 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 ">
                  <a
                    href="https://github.com/Aminizle/travel-site"
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Github
                    <AiFillGithub className="ml-2 hover:scale-125" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex-1 rounded-lg ">
          <a
            href="https://marvel-cinematic-universe.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={marvel} alt="Project 1" className="rounded-lg" />
          </a>
          <div className="grid md:grid-cols-2 m-3">
            <p className=" text-left text-sm"><span className="text-center text-lg font-bold">Marvel Cinematic Universe Explorer</span><br></br>
              Embark on an epic journey through the Marvel Cinematic Universe on
              this site! Get the inside scoop straight from Marvel, with the
              latest information powered by their very own API. Experience the
              magic of your favorite movies like never before with stunning
              cinema posters, heart-pumping trailers,director information, IMDB
              links, social media, and release dates all at your fingertips.
              Dive into the story and immerse yourself in the world of each film
              with engaging descriptions that bring the action to life.
            </p>
            <div>
              <p className="text-center text-lg font-bold">Tech Stack:</p>
              <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
              <div className="inline-flex items-center my-2">
                <Button className="mx-1 bg-cyan-500 hover:bg-teal-500 text-wide dark:text-white p-1 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 ">
                  <a
                    href="https://marvel-cinematic-universe.netlify.app/"
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live Site
                    <BiCameraMovie className="ml-2 hover:scale-125" />
                  </a>
                </Button>
                <Button className="mx-1 bg-cyan-500 hover:bg-teal-500 text-wide dark:text-white p-1 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 ">
                  <a
                    href="https://github.com/Aminizle/Marvel"
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Github
                    <AiFillGithub className="ml-2 hover:scale-125" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex-1 rounded-lg ">
          <a href="https://nasa-picture-archive.netlify.app/" target="_blank" rel="noreferrer">
            <img src={nasa} alt="Project 3" className="rounded-lg " />
          </a>
          <div className="grid md:grid-cols-2 m-3 ">
            <p className="text-left text-sm"><span className="text-center text-lg font-bold">NASA Picture of the Day Explorer</span><br></br>
              Delve into an intergalactic journey of discovery with our NASA
              Picture of the Day Explorer! Experience breathtaking images from
              the vastness of space with a mesmerizing video background. Choose
              any date you like and bask in the beauty of the cosmos, with a
              simple yet powerful interface that brings the universe to your
              fingertips. Get up close and personal with each picture,
              accompanied by a descriptive title and insightful explanation. And
              don't forget to share your interstellar adventures with your
              friends and followers through our integrated social media links.
              Get ready for a truly out-of-this-world experience!
            </p>
            <div>
              <p className="text-center text-lg font-bold">Tech Stack:</p>
              <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
              </ul>
              <div className="inline-flex items-center my-2">
                <Button className="mx-1 bg-cyan-500 hover:bg-teal-500 text-wide dark:text-white p-1 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 ">
                  <a
                    href="https://nasa-picture-archive.netlify.app/"
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live Site
                    <GoTelescope className="ml-2 hover:scale-125" />
                  </a>
                </Button>
                <Button className="mx-1 bg-cyan-500 hover:bg-teal-500 text-wide dark:text-white p-1 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 ">
                  <a
                    href="https://github.com/Aminizle/NASA"
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Github
                    <AiFillGithub className="ml-2 hover:scale-125" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex-1 rounded-lg ">
          <a href="https://last-expression.netlify.app/" target="_blank" rel="noreferrer">
            <img src={expression} alt="Project 3" className="rounded-lg " />
          </a>
          <div className="grid md:grid-cols-2 m-3 ">
            <p className="text-left text-sm"><span className="text-center text-lg font-bold">Last Expression: Photography gallery</span><br></br>
              Unleash your creativity and let the world bask in the brilliance
              of your photography with our fully responsive website,
              custom-tailored to showcase your greatest shots! With a sleek and
              user-friendly interface, you can effortlessly display your
              masterpieces for all to see. Showcase your artistic vision and
              tell your story through your lens with ease, and make it easy for
              your fans to stay connected with you through our seamlessly
              integrated social media links. Get ready to take your photography
              to the next level and captivate the world with your talent!
            </p>
            <div>
              <p className="text-center text-lg font-bold">Tech Stack:</p>
              <ul>
                <li>HTML 5</li>
                <li>Sass</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
              </ul>
              <div className="inline-flex items-center my-2">
                <Button className="mx-1 bg-cyan-500 hover:bg-teal-500 text-wide dark:text-white p-1 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 ">
                  <a
                    href="https://last-expression.netlify.app/"
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live Site
                    <AiFillCamera className="ml-2 hover:scale-125" />
                  </a>
                </Button>
                <Button className="mx-1 bg-cyan-500 hover:bg-teal-500 text-wide dark:text-white p-1 rounded-md shadow-xl hover:shadow-cyan-500/50 hover:scale-110 ">
                  <a
                    href="https://github.com/Aminizle/Bilal-Photography"
                    className="inline-flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Github
                    <AiFillGithub className="ml-2 hover:scale-125" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PastProjects;
