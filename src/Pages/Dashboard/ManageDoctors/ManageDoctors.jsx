import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading";

export default function ManageDoctors() {
  // load all doctors
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("dpt")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });

  // loading spinner
  if (isLoading) {
    return <Loading />;
  }
  console.log(doctors.doctors);
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4">Manage Doctors</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Specialty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {doctors.doctors.map((doctor, i) => (
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={doctor.image} />
                      </div>
                    </div>
                  </th>
                  <th>{doctor.name}</th>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
