import React from "react";
import { Button } from "@material-tailwind/react";
import { IoMdCopy } from "react-icons/io";

function ContactForm() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("AmeenMohiyuddin2022@gmail.com");
  };

  return (
    <section id="contact">
      <form name="contact" method="POST" data-netlify="true">
        <div>
          <h3 className="text-3xl mb-5 md:text-4xl max-w-lg mx-auto dark:text-gray-200">
            Let's Connect
          </h3>
          <p className="text-md py-2 leading-8 d:text-xl max-w-lg mx-auto dark:text-gray-500">
            Looking for a new developer or just want to chat?
          </p>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 gap-10 py-10  text-white rounded-lg">
            <form onSubmit="submit">
              <div className="mb-5">
                <label className="text-left block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-5">
                <label className="text-left block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-5">
                <label className="text-left block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  className="bg-cyan-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send
                </Button>
              </div>
            </form>
            <div className="basis-1/3 flex-1 rounded-lg mx-auto max-w-lg">
              <div className="my-20">
                <p className="text-gray-800 dark:text-gray-500">
                  Whether you need a{" "}
                  <span className="text-cyan-500">one-person powerhouse </span>
                  or a{" "}
                  <span className="text-cyan-500">
                    Scrum team player in an Agile environment{" "}
                  </span>{" "}
                  who can seamlessly integrate with your existing workflow, I've
                  got you covered. Don't hesitate,{" "}
                  <span className="text-cyan-500">
                    send me a message today!{" "}
                  </span>
                </p>
              </div>
              <div className="flex mt-5 bg-slate-300 rounded-lg w-164">
                <p className=" text-md py-2 px-4 leading-8 md:text-xl max-w-lg  text-gray-800 dark:text-gray-500">
                  You can also email me at{" "}
                  <a
                    href="mailto:AmeenMohiyuddin2022@gmail.com"
                    className="underline"
                  >
                    AmeenMohiyuddin2022@gmail.com
                  </a>
                </p>
                <Button
                  onClick={handleCopyEmail}
                  className="hover:bg-teal-500 bg-cyan-500 text-white font-bold py-2 px-4 rounded-l-none  focus:outline-none focus:shadow-outline"
                >
                  <IoMdCopy className="text-2xl " />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
