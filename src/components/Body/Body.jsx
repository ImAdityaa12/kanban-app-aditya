import React from "react";
import Status from "../status/Status";
import Priority from "../priority/Priority";
import Users from "../users/Users";
import "./Body.css";
const Body = ({ apiData, data }) => {
  return (
    <div className="body">
      {data.grouping === "status" && (
        <Status apiData={apiData} filterData={data} />
      )}
      {data.grouping === "priority" && (
        <Priority apiData={apiData} filterData={data} />
      )}
      {data.grouping === "user" && (
        <Users apiData={apiData} filterData={data} />
      )}
    </div>
  );
};

export default Body;
