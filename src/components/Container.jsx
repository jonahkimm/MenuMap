import React from "react";
import Recommendations from "./Recommendations";
import MiddleSearch from "./MiddleSearch";
import Map from "./Map";


const ContainerGrid = () => {
  return (
    <div className="grid grid-cols-3">
        <Recommendations />
        <MiddleSearch />
        <Map />
    </div>
  );
};

export default ContainerGrid;
