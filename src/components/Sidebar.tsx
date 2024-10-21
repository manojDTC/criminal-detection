import { Link } from "react-router-dom";
import Live from "../assets/chat.png";
import Database from "../assets/people_alt.png";
import History from "../assets/history.png";
import TimeLine from "../assets/timeline.png";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<string>("d");

  return (
    <div style={{ background: "#EFF3F5" }} className="sidemenu">
      <ul>
        <li className={activeTab === "d" ? "active" : ""}>
          <Link
            to="/dashboard"
            onClick={() => {
              setActiveTab("d");
            }}
          >
            <img src={Database} alt="database"></img>
            <p>Database</p>
          </Link>
        </li>
        <li className={activeTab === "l" ? "active" : ""}>
          <Link
            to="/livefeed"
            onClick={() => {
              setActiveTab("l");
            }}
          >
            <img src={Live} alt="Live"></img>
            <p>Live</p>
          </Link>
        </li>
        <li className={activeTab === "h" ? "active" : ""}>
          <Link
            to="/history"
            onClick={() => {
              setActiveTab("h");
            }}
          >
            <img src={History} alt="Live"></img>
            <p>History</p>
          </Link>
        </li>
        <li className={activeTab === "t" ? "active" : ""}>
          <Link
            to="/timeline"
            onClick={() => {
              setActiveTab("t");
            }}
          >
            <img src={TimeLine} alt="Live"></img>
            <p>TimeLine</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
