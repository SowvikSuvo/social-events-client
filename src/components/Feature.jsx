import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaUsers,
  FaDonate,
  FaLightbulb,
  FaCalendarAlt,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaHandsHelping className="w-12 h-12 text-pink-500" />,
      title: "Create Events",
      description: "Easily organize community service events.",
      points: ["Set event type", "Upload thumbnail", "Choose location & date"],
    },
    {
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
      title: "Join Events",
      description: "Participate in social events near you.",
      points: ["Join with one click", "Track joined events", "Get reminders"],
    },

    {
      icon: <FaDonate className="w-12 h-12 text-yellow-500" />,
      title: "Donations & Help",
      description: "Support social causes with donations.",
      points: [
        "View donation drives",
        "Help local communities",
        "Track your contributions",
      ],
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-purple-500" />,
      title: "Upcoming Events",
      description: "Share and implement creative solutions for social causes.",
      points: [
        "Brainstorm new projects",
        "Collaborate with community",
        "Make an impact",
      ],
    },
    {
      icon: <FaCalendarAlt className="w-12 h-12 text-indigo-500" />,
      title: "Manage Event",
      description: "Get ready for the upcoming community-driven initiatives.",
      points: [
        "Volunteer for cleanup drives",
        "Participate in tree plantations",
        "Support donation campaigns",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20  rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center  mb-12">
        Platform Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform flex flex-col items-center text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ rotate: 10 }} className="mb-4">
              {feature.icon}
            </motion.div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-3">{feature.description}</p>
            <ul className="text-gray-500 text-sm list-disc list-inside space-y-1">
              {feature.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
