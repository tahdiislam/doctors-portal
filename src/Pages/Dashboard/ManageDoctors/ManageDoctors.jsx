import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal";
import Loading from "../../../Shared/Loading";

export default function ManageDoctors() {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  // load all doctors
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-teal.vercel.app/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("dpt")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });

  // delete doctors handler
  const handleDeleteDoctors = (doctor) => {
    axios
      .delete(`https://doctors-portal-server-teal.vercel.app/doctors/${doctor._id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("dpt")}`,
        },
      })
      .then((res) => {
        if(res.data.result.deletedCount){
          toast.success("Doctor deleted successfully.")
          refetch();
        }
      });
  };

  // loading spinner
  if (isLoading) {
    return <Loading />;
  }

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
              {doctors?.doctors?.map((doctor, i) => (
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
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
        title="Are you sure you want to delete?"
        message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
        setDeletingDoctor={setDeletingDoctor}
        handleDeleteDoctors={handleDeleteDoctors}
        deletingDoctor={deletingDoctor}
        />
      )}
    </div>
  );
}
