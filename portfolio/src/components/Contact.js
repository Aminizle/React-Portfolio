import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name} Email: ${email} Message: ${message}`);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("youremail@example.com");
  };

  return (
    <div className="w-full max-w-sm">
      <h3 className="text-3xl mb-5 md:text-4xl max-w-lg mx-auto dark:text-gray-200">
        Contact
      </h3>
      <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
        Looking for a new developer or just want to chat?
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="text-left block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-5">
          <label className="text-left block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-5">
          <label className="text-left block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
      <div className="mt-5">
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
          Send me a message to get the process started. You can also email me
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
