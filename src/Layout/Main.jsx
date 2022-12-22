import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footers from "../Shared/Footers";
import Headers from "../Shared/Headers";
import GridLoader from "react-spinners/GridLoader";

const Main = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <section>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <GridLoader
            color={"#10CEE7"}
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Headers />
          <Outlet />
          <Footers />
        </div>
      )}
    </section>
  );
};

export default Main;
