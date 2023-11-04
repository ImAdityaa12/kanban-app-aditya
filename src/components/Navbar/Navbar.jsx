import React, { useState } from "react";
import "./Navbar.css";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineDown } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";
const Navbar = ({ data, setData }) => {
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    const obj = {
      [e.target.name]: e.target.value,
    };
    setData({ ...data, ...obj });
  };
  return (
    <div className="nav">
      <div className="heading">
        <button
          onClick={() => setShow(!show)}
          className="button"
          style={{ display: "flex", gap: "4px" }}
        >
          <LuSettings2 />
          <span style={{ fontWeight: "500" }}>Display</span>
          {show === false ? (
            <AiOutlineDown
              style={{
                fontSize: "10px",
                // position: "absolute",
                marginTop: "3px",
              }}
            />
          ) : (
            <BiUpArrowAlt style={{ fontSize: "12px", marginTop: "1px" }} />
          )}
        </button>
      </div>
      {show && (
        <div className="groupSection">
          <div className="grouping">
            <label htmlFor="group" className="label">
              Grouping
            </label>
            <select
              name="grouping"
              id="group"
              value={data.grouping}
              onChange={handleChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="ordering">
            <label htmlFor="group" className="label">
              Ordering
            </label>
            <select
              name="ordering"
              id="group"
              value={data.ordering}
              onChange={handleChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
