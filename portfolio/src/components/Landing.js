import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

function Landing() {
  return (
    <section className="" id="Landing">
      <div className="text-center pt-36 ">
        <h2 className="text-5xl py-2 dark:text-gray-200 font-medium md:text-6xl underline">
          Ameen Mohiyuddin
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl text-cyan-600 ">
          Full Stack Software Engineer
        </h3>
        <p className="text-md py-5 leading-8  md:text-xl max-w-lg mx-auto text-gray-800 dark:text-gray-500">
          Hey there! 👋 <br></br>I'm a full-stack web wizard with a passion for
          crafting incredible user experiences. Having a strong background in
          software quality assurance and automation, I approach technical
          problems with the end user in mind. As both a one-person powerhouse
          and a Scrum team player in Agile environments, I can seamlessly
          integrate into any existing workflow and bring some serious energy to
          the table. Let me put my skills to work for you!
          <br></br>
          <VscDebugBreakpointLog className="my-2 mx-auto text-cyan-600" />
          When I'm not honing my software development skills, you can find me
          cruising around on my motorcycle, exploring new roads and pushing my
          limits. 🏍️
        </p>
      </div>
    </section>
  );
}

export default Landing;
