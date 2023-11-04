import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineWarning } from "react-icons/ai";
import {
  MdOutlineSignalCellular4Bar,
  MdSignalCellular2Bar,
  MdSignalCellularConnectedNoInternet1Bar,
} from "react-icons/md";
import "./Priority.css";
const Priority = ({ apiData, filterData }) => {
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
  const count = (a) => {
    const countArray = data.filter((item, index) => item.priority === a);
    return <p className="count">{countArray.length}</p>;
  };
  useEffect(() => {
    ordering();
  }, [filterData]);

  return (
    <div className="priority">
      <div className="noPriority gap">
        <div className="heading">
          <div className="text">
            <span>
              <BsThreeDots />
            </span>
            <p>No Priority</p>
            <div className="num">{count(0)}</div>
          </div>
          <div className="icons">
            <AiOutlinePlus />
            <BsThreeDots />
          </div>
        </div>
        {data?.map((item, index) => {
          if (item?.priority === 0) {
            return <Card data={item} />;
          }
          return null;
        })}
      </div>
      <div className="urgent gap">
        <div className="heading">
          <div className="text">
            <span
              style={{
                background: "orange",
                borderRadius: "2px",
                width: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AiOutlineWarning style={{ color: "white", width: "8px" }} />
            </span>
            <p>Urgent</p>
            <div className="num">{count(4)}</div>
          </div>
          <div className="icons">
            <AiOutlinePlus />
            <BsThreeDots />
          </div>
        </div>
        {apiData?.tickets?.map((item, index) => {
          if (item?.priority === 4) {
            return <Card data={item} key={index} />;
          }
          return null;
        })}
      </div>
      <div className="high gap">
        <div className="heading">
          <div className="text">
            <span>
              <MdOutlineSignalCellular4Bar style={{ fontSize: "12px" }} />
            </span>
            <p>High</p>
            <div className="num">{count(3)}</div>
          </div>
          <div className="icons">
            <AiOutlinePlus />
            <BsThreeDots />
          </div>
        </div>
        {data?.map((item, index) => {
          if (item?.priority === 3) {
            return <Card data={item} key={index} />;
          }
          return null;
        })}
      </div>
      <div className="medium gap">
        <div className="heading">
          <div className="text">
            <span>
              <MdSignalCellular2Bar />
            </span>
            <p>Medium</p>
            <div className="num">{count(2)}</div>
          </div>
          <div className="icons">
            <AiOutlinePlus />
            <BsThreeDots />
          </div>
        </div>
        {data?.map((item, index) => {
          if (item?.priority === 2) {
            return <Card data={item} key={index} />;
          }
          return null;
        })}
      </div>
      <div className="low gap">
        <div className="heading">
          <div className="text">
            <span>
              <MdSignalCellularConnectedNoInternet1Bar />
            </span>
            <p>Low</p>
            <div className="num">{count(1)}</div>
          </div>
          <div className="icons">
            <AiOutlinePlus />
            <BsThreeDots />
          </div>
        </div>
        {data?.map((item, index) => {
          if (item?.priority === 1) {
            return <Card data={item} key={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Priority;
