import React, { useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_itn0487",      // ✅ Service ID
        "template_epkfrsh",     // ✅ Template ID
        formRef.current,
        "GPjw6jefsaAQjHUy7"     // ✅ Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <div className="py-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-white">Get in </span>
        <span className="text-pink-400">Touch</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Let's work together!
          </h3>

          <div className="space-y-4 mt-8 text-slate-300">
            <div className="flex items-center space-x-4">
              <FaEnvelope /> <span>vikashsinghraj2001@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone /> <span>+91 8953710180</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt /> <span>Noida, Uttar Pradesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
               name="name"       // ✅ REQUIRED
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white/10 text-white rounded-lg"
            />

            <input
               type="email"
               name="email"   // ✅ REQUIRED
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-white/10 text-white rounded-lg"
            />

            <textarea
             name="message"           // ✅ REQUIRED
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-white/10 text-white rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
