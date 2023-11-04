import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Users.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
const User = ({ apiData, filterData }) => {
  const [data, setData] = useState([]);

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
    <div className="user">
      <div className="wrapperUser">
        {apiData?.users?.map((user, index) => {
          return (
            <div key={index} className="userName">
              <div className="headerUser">
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <BiSolidUserCircle
                    style={{
                      fontSize: "18px",
                    }}
                  />
                  {user?.name}
                </p>
                <div className="rightStatusHeading icons">
                  <AiOutlinePlus />
                  <BsThreeDots />
                </div>
              </div>
              {data?.map((item, index) => {
                if (user?.id === item.userId) {
                  return (
                    <div key={index} className="items">
                      <Card data={item} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
