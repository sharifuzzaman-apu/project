import React from "react";

const Divider = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-2 my-1">
        <hr className="w-12 bg-[rgba(224, 224, 224, 1)]" />
        <p className="text-xs">or</p>
        <hr className="w-12 bg-[rgba(224, 224, 224, 1)]" />
      </div>
    </div>
  );
};

export default Divider;
