import React from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaUsers,
  FaCalendarCheck,
  FaClipboardList,
  FaRegSmile,
} from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const eventsData = [
  { title: "Charity Run", created: 5, managed: 3, participants: 50 },
  { title: "Beach Cleanup", created: 2, managed: 2, participants: 30 },
  { title: "Tree Plantation", created: 3, managed: 1, participants: 40 },
  { title: "Food Drive", created: 4, managed: 2, participants: 60 },
];

const Dashboard = () => {
  // Calculate totals dynamically
  const totalEvents = eventsData.length;
  const totalCreated = eventsData.reduce((acc, item) => acc + item.created, 0);
  const totalManaged = eventsData.reduce((acc, item) => acc + item.managed, 0);
  const totalParticipants = eventsData.reduce(
    (acc, item) => acc + item.participants,
    0
  );

  // Graph data
  const graphData = {
    labels: eventsData.map((e) => e.title),
    datasets: [
      {
        label: "Created Events",
        data: eventsData.map((e) => e.created),
        borderColor: "rgba(236, 72, 153, 1)", // pink
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        tension: 0.4,
      },
      {
        label: "Managed Events",
        data: eventsData.map((e) => e.managed),
        borderColor: "rgba(79, 70, 229, 1)", // indigo
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.4,
      },
      {
        label: "Participants",
        data: eventsData.map((e) => e.participants),
        borderColor: "rgba(34, 197, 94, 1)", // green
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Overview of Events" },
    },
  };

  // Stats cards
  const stats = [
    {
      title: "Total Events",
      value: totalEvents,
      icon: <FaCalendarCheck size={30} className="text-pink-500" />,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Created Events",
      value: totalCreated,
      icon: <FaClipboardList size={30} className="text-blue-500" />,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Managed Events",
      value: totalManaged,
      icon: <FaClipboardList size={30} className="text-purple-500" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Participants Joined",
      value: totalParticipants,
      icon: <FaRegSmile size={30} className="text-yellow-400" />,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-pink-500 mb-2">
          Dashboard
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300">
          Overview of your events and participation stats
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-r ${stat.color} text-white rounded-xl shadow-lg p-5 flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div>{stat.icon}</div>
            </div>
            <div className="mt-4 text-sm font-medium">{stat.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Graph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-base-200 p-6 rounded-xl shadow-lg"
      >
        <Line data={graphData} options={graphOptions} />
      </motion.div>

      {/* Quick Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <button className="btn bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:opacity-80">
          Create Event
        </button>
        <button className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-80">
          Manage Events
        </button>
        <button className="btn bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:opacity-80">
          Joined Events
        </button>
        <button className="btn bg-gradient-to-r from-green-400 to-teal-500 text-white hover:opacity-80">
          View Reports
        </button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
