import React from "react";
import { motion } from "framer-motion";

import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ManageEvents = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data);

  const handleDeleteEvent = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/events/${data._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(0);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className=" bg-base-200 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-base-100 shadow-xl rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          All Events: <span className="text-primary">{data.length}</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gradient-to-r from-primary to-secondary text-white">
              <tr>
                <th>SL No</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((event, index) => (
                <motion.tr
                  key={event._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="hover:bg-base-200 transition-all duration-300"
                >
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-14 h-14 rounded-lg object-cover border border-base-300 hover:scale-110 transition-transform duration-300"
                    />
                  </td>
                  <td className="font-semibold">{event.title}</td>
                  <td>{event.eventType}</td>
                  <td>{event.location}</td>
                  <td>{event.date}</td>
                  <td className="flex flex-wrap gap-2 justify-center">
                    <Link
                      to={`/update-event/${event._id}`}
                      className="btn btn-sm btn-primary hover:scale-105 transition-transform"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDeleteEvent(event._id, event.title)}
                      className="btn btn-sm btn-error hover:scale-105 transition-transform"
                    >
                      Remove
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
