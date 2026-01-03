import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHandsHelping, FaUsers } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Founder & CEO",
    photo:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Passionate about connecting communities and protecting the environment.",
  },
  {
    name: "Bob Smith",
    role: "Event Manager",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Organizes impactful events for social good and environmental awareness.",
  },
  {
    name: "Clara Lee",
    role: "Community Lead",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Engages volunteers and supports local initiatives for change.",
  },
];

const AboutUs = () => {
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
          About <span className="text-purple-500">KindEarth</span>
        </h1>
        <p className="text-gray-600 sm:text-lg">
          Connecting communities and making the world a better place, one event
          at a time.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <FaUsers className="text-3xl text-pink-500 mx-auto mb-2" />
          <h2 className="text-2xl font-bold">500+</h2>
          <p className="text-gray-500">Active Members</p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.1 }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <FaHandsHelping className="text-3xl text-purple-500 mx-auto mb-2" />
          <h2 className="text-2xl font-bold">200+</h2>
          <p className="text-gray-500">Events Hosted</p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <MdEvent className="text-3xl text-green-500 mx-auto mb-2" />
          <h2 className="text-2xl font-bold">1,000+</h2>
          <p className="text-gray-500">Volunteers Engaged</p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.3 }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <FaLeaf className="text-3xl text-teal-500 mx-auto mb-2" />
          <h2 className="text-2xl font-bold">50+</h2>
          <p className="text-gray-500">Projects Completed</p>
        </motion.div>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-pink-500 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To create a global community where everyone can contribute to social
            and environmental causes, making every action count.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-purple-500 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To inspire and empower communities to organize meaningful events
            that bring people together and protect our planet.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-pink-500"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-500">
          Join Us Today
        </h2>
        <p className="text-gray-600 mb-6">
          Be part of a community that makes a difference. Participate,
          volunteer, and help us grow!
        </p>
        <a
          href="/auth/login"
          className="btn bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-80 transition-all"
        >
          Get Started
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUs;
