import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:5000/jwt?email=${email}`).then((res) => {
        // console.log(res.data.token);
        if (res.data.token) {
          localStorage.setItem("dpt", res.data.token);
          setToken(res.data.token);
        }
      });
    }
  }, [email]);
  return [token];
};

export default useToken;
