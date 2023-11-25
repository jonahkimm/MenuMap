import React from "react";
import Recommendations from "./Recommendations";
import MiddleSearch from "./MiddleSearch";

const ContainerGrid = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <Recommendations />
      </div>
      <div className="col-span-1">
        <MiddleSearch />
      </div>
    </div>
  );
};

export default ContainerGrid;
