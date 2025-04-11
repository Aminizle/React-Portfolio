import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { IoMdCopy, IoMdMail, IoMdCheckmark } from "react-icons/io";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isCopied, setIsCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Ameen.Mohiyuddin@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Netlify form submission
      const form = e.target;
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/ameen-mohiyuddin/",
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/Aminizle",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      url: "https://twitter.com/DevAmeenM",
    },
    {
      icon: <FaYoutube className="text-xl" />,
      url: "https://www.youtube.com/channel/UCtnzaJeLTPhhH6jolpdGhpw",
    },
    {
      icon: <SiCodewars className="text-xl" />,
      url: "https://www.codewars.com/users/DevAmeenM",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 bg-gray-800 p-8 rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
            Let's Connect
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Looking for a new developer or just want to chat?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="bg-gray-800 p-8 rounded-xl shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-200 font-medium mb-2 text-left"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-600 focus:border-cyan-500"
                } focus:outline-none focus:ring-1 focus:ring-cyan-500 transition`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-200 font-medium mb-2 text-left"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-600 focus:border-cyan-500"
                } focus:outline-none focus:ring-1 focus:ring-cyan-500 transition`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-gray-200 font-medium mb-2 text-left"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-600 focus:border-cyan-500"
                } focus:outline-none focus:ring-1 focus:ring-cyan-500 transition`}
                placeholder="Your message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300 text-white font-medium py-3 px-6 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
                ripple={true}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitSuccess && (
                <div className="ml-4 text-green-400 flex items-center">
                  <IoMdCheckmark className="mr-1" /> Message sent successfully!
                </div>
              )}
            </div>
          </form>

          <div className="flex flex-col justify-between">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg h-full shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow duration-300">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-200 mb-4">
                  Why contact me?
                </h4>
                <p className="text-gray-300 mb-4">
                  Whether you need a one-person powerhouse or a Scrum team
                  player in an Agile environment who can seamlessly integrate
                  with your existing workflow, I've got you covered. Don't
                  hesitate, send me a message today!
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-200 mb-4">
                  Email me directly
                </h4>
                <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden shadow-lg  hover:shadow-cyan-400/50 transition-shadow duration-300">
                  <div className="flex-grow p-4">
                    <div className="flex items-center">
                      <IoMdMail className="text-cyan-400 mr-2 text-xl" />
                      <a
                        href="mailto:Ameen.Mohiyuddin@gmail.com"
                        className="text-gray-200 hover:text-cyan-400 transition"
                      >
                        Ameen.Mohiyuddin@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-lg  focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-offset-1 text-white p-4 flex items-center justify-center mr-1"
                    title="Copy to clipboard"
                    aria-label="Copy email address"
                  >
                    {isCopied ? <IoMdCheckmark /> : <IoMdCopy />}
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-200 mb-4">
                  Find me online
                </h4>
                <div className="flex justify-between m-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition text-2xl "
                      aria-label={`${social.url.split(".")[1]} profile`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
