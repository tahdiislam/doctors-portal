import React from "react";
import { useRouteError } from "react-router-dom";
import Headers from "../../Shared/Headers";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Headers />
      <h2 className="text-6xl font-bold text-center mt-16 text-red-500">
        {error.status}
      </h2>
      <h2 className="text-4xl font-bold text-center my-5 text-gray-800">
        {error.statusText || error.message}
      </h2>
    </div>
  );
};

export default ErrorPage;
