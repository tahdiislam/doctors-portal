import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserContext } from "../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  // load appointment data from server
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.result;
    },
  });

  // spinner
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-4">
      <h3 className="text-3xl mb-6">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id} className="hover">
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
