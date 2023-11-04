import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Status.css";
import { BsCircle, BsThreeDots } from "react-icons/bs";
import { GiStopwatch } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
const Status = ({ apiData, filterData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (apiData && apiData.tickets) {
      const newData = apiData.tickets
        .slice()
        .sort((a, b) => b.priority - a.priority);
      setData(newData);
    }
  }, [apiData]);
  const ordering = () => {
    if (filterData.ordering === "priority") {
      const newData = apiData?.tickets
        ?.slice()
        .sort((a, b) => b.priority - a.priority);
      setData(newData);
    } else {
      const newData = apiData?.tickets
        ?.slice()
        .sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      setData(newData);
    }
  };

  useEffect(() => {
    ordering();
  }, [filterData]);

  return (
    <div className="status">
      <div className="wrapperStatus">
        <div
          className="todo"
          style={{
            display: "flex",
            gap: "10px",
            width: "200px",
          }}
        >
          <div className="headingStatus">
            <div className="leftStatusHeading">
              <BsCircle style={{ fontSize: "12px" }} />
              <span>Todo</span>
            </div>
            <div className="rightStatusHeading icons">
              <AiOutlinePlus />
              <BsThreeDots />
            </div>
          </div>
          {data?.map((item, index) => {
            if (item?.status === "Todo") {
              return (
                <div>
                  <Card data={item} key={index} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div
          className="inProgress"
          style={{
            display: "flex",
            gap: "10px",
            width: "200px",
            flexDirection: "column",
          }}
        >
          <div className="headingStatus">
            <div className="leftStatusHeading">
              <GiStopwatch style={{ fontSize: "12px", color: "orange" }} />
              <span>In Progress</span>
            </div>
            <div className="rightStatusHeading icons">
              <AiOutlinePlus />
              <BsThreeDots />
            </div>
          </div>
          {data?.map((item, index) => {
            if (item?.status === "In progress") {
              return (
                <div>
                  <Card data={item} key={index} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div
          className="done"
          style={{
            display: "flex",
            gap: "10px",
            width: "200px",
            flexDirection: "column",
          }}
        >
          <div className="headingStatus">
            <div className="leftStatusHeading">
              <IoCheckmarkDoneCircleSharp
                style={{ fontSize: "12px", color: "green" }}
              />
              <span>Done</span>
            </div>
            <div className="rightStatusHeading icons">
              <AiOutlinePlus />
              <BsThreeDots />
            </div>
          </div>
          {data?.map((item, index) => {
            if (item?.status === "Backlog") {
              return (
                <div key={index}>
                  <Card data={item} title="Backlog" key={index} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
