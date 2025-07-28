import React from "react";

const SGHeader = ({ children, className = "" }) => {
  return (
    <div className={`font-bold leading-[1.2] ${className}`}>{children}</div>
  );
};

export default SGHeader;
