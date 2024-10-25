import { Link, useLocation } from "react-router-dom";
import Live from "../assets/chat.png";
import Database from "../assets/people_alt.png";
import History from "../assets/history.png";
import TimeLine from "../assets/timeline.png";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    if (currentPath === "/dashboard") {
      setActiveTab("d");
    } else if (currentPath === "/livefeed") {
      setActiveTab("l");
    } else if (currentPath === "/history") {
      setActiveTab("h");
    } else if (currentPath === "/timeline") {
      setActiveTab("t");
    }
  }, []);
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
