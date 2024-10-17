import React from "react";
import Live from "../assets/chat.png";
import Database from "../assets/people_alt.png";
import History from "../assets/history.png";
import TimeLine from "../assets/timeline.png";

const Sidebar = () => {
  return (
    <div style={{ background: "#EFF3F5" }} className="sidemenu">
      <ul>
        <li>
          <a href="">
            <img src={Live} alt="Live"></img>
            <p>Live</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={Database} alt="Live"></img>
            <p>Database</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={History} alt="Live"></img>
            <p>History</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src={TimeLine} alt="Live"></img>
            <p>TimeLine</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
