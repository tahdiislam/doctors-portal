import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading";

const AllUsers = () => {
  // load all user
  const {data: users = [], isLoading} = useQuery({
    queryKey: ["users"],
    queryFn: async() => {
        const res = await fetch("http://localhost:5000/users")
        const data = await res.json();
        return data.users;
    }
  })
  if(isLoading){
    return <Loading/>
  }
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-4">All Users</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, i) => <tr key={user._id}>
                    <th>{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button className="btn btn-primary btn-xs">Make Admin</button></td>
                    <td><button className="btn btn-error btn-xs">Delete User</button></td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;