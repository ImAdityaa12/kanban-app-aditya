import React from "react";
import "./Card.css";
import { GoDotFill } from "react-icons/go";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="content">
          <div className="id">
            <p>{data?.id}</p>
          </div>
          <div className="title">
            <span>{data?.title}</span>
          </div>
          <div className="footer">
            <div className="prior">
              <p>{data?.priority}</p>
            </div>
            <div className="feature">
              <GoDotFill />
              <p>{data?.tag[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
