import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { IoMdCopy, IoMdMail, IoMdCheckmark } from "react-icons/io";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isCopied, setIsCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Ameen.Mohiyuddin@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
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

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section id="Contact" className="py-16 px-4 pt-[6rem] -mt-[6rem]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12 bg-gray-800 p-8 rounded-xl shadow-lg shadow-glow-blue hover:shadow-glow-purple transition-shadow duration-300"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Let's Connect</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Looking for a new developer or just want to chat?</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="bg-gray-800 p-8 rounded-xl shadow-lg shadow-glow-blue hover:shadow-glow-purple transition-shadow duration-300"
          >
            <input type="hidden" name="form-name" value="contact" />

            {["name", "email"].map((field) => (
              <div className="mb-6" key={field}>
                <label className="block text-gray-200 font-medium mb-2 text-left capitalize">{field} *</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border ${
                    errors[field] ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                  } focus:outline-none focus:ring-1 focus:ring-blue-500 transition`}
                  placeholder={`Your ${field}`}
                />
                {errors[field] && <p className="text-red-400 text-sm mt-1">{errors[field]}</p>}
              </div>
            ))}

            <div className="mb-8">
              <label className="block text-gray-200 font-medium mb-2 text-left">Message *</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border ${
                  errors.message ? "border-red-500" : "border-gray-600 focus:border-blue-500"
                } focus:outline-none focus:ring-1 focus:ring-blue-500 transition`}
                placeholder="Your message..."
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                ripple={true}
                className={`bg-gray-700 rounded-lg shadow-lg hover:shadow-glow-purple transition-shadow duration-500 hover:text-purple-300 px-6 py-3 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitSuccess && (
                <div className="text-green-400 flex items-center">
                  <IoMdCheckmark className="mr-1" /> Message sent successfully!
                </div>
              )}
            </div>
          </motion.form>

          {/* Info Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-xl shadow-lg shadow-glow-blue hover:shadow-glow-purple transition-shadow duration-300 flex flex-col justify-between"
          >
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Why contact me?</h4>
              <p className="text-gray-300 mb-4">
                Whether you need a one-person powerhouse or a Scrum team player in an Agile environment who can seamlessly integrate with your existing workflow, I've got you covered.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Email me directly</h4>
              <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-glow-purple transition-shadow duration-300 text-gray-200 hover:text-purple-300">
                <div className="flex-grow p-4 flex items-center">
                  <IoMdMail className="mr-2 text-xl" />
                  <a href="mailto:Ameen.Mohiyuddin@gmail.com" className="transition">Ameen.Mohiyuddin@gmail.com</a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="bg-gray-700 p-4 flex items-center justify-center text-white hover:text-purple-300 transition rounded-r-lg"
                  title="Copy to clipboard"
                  aria-label="Copy email address"
                >
                  {isCopied ? <IoMdCheckmark /> : <IoMdCopy />}
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-200 mb-4">Find me online</h4>
              <div className="flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
