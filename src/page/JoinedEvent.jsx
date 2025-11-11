import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate} from "react-router";
import Swal from "sweetalert2";

const JoinedEvent = () => {
  // const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(event);

  useEffect(() => {
    fetch(
      `https://social-events-server-nine.vercel.app/joined-event?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      });
  }, [user?.email]);

  const handleJoinedDeleteEvent = (_id) => {
    console.log("Deleting ID:", _id);
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
        fetch(
          `https://social-events-server-nine.vercel.app/joined-event/${_id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data?.success) {
              setEvent((prev) => prev.filter((item) => item._id !== _id));

              Swal.fire({
                title: "Deleted!",
                text: "The event has been removed.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: data.message || "Failed to delete the event.",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error",
            });
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-10">
          Joined Events
        </h1>

        {event.length === 0 ? (
          <p className="text-center text-gray-500">
            You haven’t joined any events yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.map((e) => (
              <div
                key={e._id}
                className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all  duration-300"
              >
                <figure>
                  <img
                    src={
                      e.thumbnail ||
                      "https://source.unsplash.com/800x400/?charity,people"
                    }
                    alt={e.title || "Event image"}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-secondary">{e.title}</h2>
                  <p className="">{e.description?.slice(0, 300)}...</p>
                  <div className="flex justify-between text-sm  mt-3">
                    <span>📅 {e.date}</span>
                    <span>📍 {e.location}</span>
                  </div>
                  <div className="card-actions mt-4">
                    <button
                      onClick={() => handleJoinedDeleteEvent(e._id)}
                      className="btn btn-primary w-full"
                    >
                      Remove Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvent;
