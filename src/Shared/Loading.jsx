import React from "react";

const Loading = () => {
  return (
    <div className="h-[200px] flex justify-center items-center">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loading;
