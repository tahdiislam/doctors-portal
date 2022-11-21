import axios from "axios";
import { useEffect, useState } from "react";

export default function useAdmin(email) {
  const [isAdmin, setIsAdmin] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (email) {
      axios.get(`https://doctors-portal-server-teal.vercel.app/users/admin/${email}`).then((res) => {
        // console.log(res.data);
        setIsAdmin(res.data.isAdmin);
        setLoading(false);
      });
    }
  }, [email]);
  return [isAdmin, loading];
}