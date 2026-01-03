import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can connect with API or email service
    console.log("Form submitted", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-base-200 min-h-screen py-16 px-4 sm:px-6 lg:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-2">
          Contact <span className="text-purple-500">Us</span>
        </h1>
        <p className="text-gray-600 sm:text-lg">
          We'd love to hear from you! Get in touch for questions, suggestions,
          or volunteering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            You can reach us via email, phone, or visit us at our office. We are
            always open to connect with our community.
          </p>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-500 text-2xl" />
            <span>123 Green Street, Eco City, Earth</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-500 text-2xl" />
            <span>contact@kindearth.org</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-teal-500 text-2xl" />
            <span>+1 234 567 890</span>
          </div>

          {/* Map Section */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="KindEarth Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.84781757445!2d-74.0060156!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b47b9de1f5%3A0x7f6e40d88ad1ab8!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
              className="w-full h-64 sm:h-80"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-6 sm:p-10"
        >
          <h2 className="text-2xl font-bold text-purple-500 mb-6">
            Send Us a Message
          </h2>
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center font-semibold"
            >
              Your message has been sent!
            </motion.div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-80 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Extra Features / Fun Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-pink-500 mb-6">
          Why Contact Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform"
          >
            <FaEnvelope className="text-3xl text-pink-500 mx-auto mb-2" />
            <h3 className="font-bold mb-1">Quick Email</h3>
            <p className="text-gray-500 text-sm">
              Get fast responses from our team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform"
          >
            <FaPhone className="text-3xl text-purple-500 mx-auto mb-2" />
            <h3 className="font-bold mb-1">Call Anytime</h3>
            <p className="text-gray-500 text-sm">
              We are available on phone during business hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform"
          >
            <FaMapMarkerAlt className="text-3xl text-teal-500 mx-auto mb-2" />
            <h3 className="font-bold mb-1">Visit Us</h3>
            <p className="text-gray-500 text-sm">
              Come see our office and join community events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform"
          >
            <FaUsers className="text-3xl text-pink-500 mx-auto mb-2" />
            <h3 className="font-bold mb-1">Community Support</h3>
            <p className="text-gray-500 text-sm">
              Join thousands of volunteers making a difference.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
