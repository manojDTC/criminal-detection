import { useEffect, useState } from "react";

interface Alert {
  alert: string;
  dateTime: Date;
  name: string;
  location: string;
  cameraName: string;
}

const Alert = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const markAsFalse = () => {
    console.log("hi");
  };
  return (
    <div
      style={{
        marginLeft: "70px",
        background: "#8080800f",
        height: "calc(100vh - 90px)",
        padding: "20px",
        // overflow: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          padding: "10px",
        }}
      >
        <h2 style={{ margin: "0", fontSize: "18px" }}>
          Alerts
          <span style={{ color: "#838383" }}>| Latest Notifications</span>
        </h2>
      </div>
      <div style={{ overflow: "auto", maxHeight: "calc(100vh - 130px)" }}>
        <table className="dbtable alertTable">
          <tbody>
            <tr>
              <th>Alert Lists</th>
              <th>Time Stamp</th>
              <th>Name</th>
              <th>Location</th>
              <th>Camera Name</th>
              <th>Action</th>
            </tr>
            {alerts.map((alert) => {
              return (
                <tr>
                  <td>{alert.alert}</td>
                  {/* <td>{alert.dateTime}</td> */}
                  <td>
                    <span>
                      <img src="" alt=""></img>
                    </span>
                    {alert.name}
                  </td>
                  <td>{alert.location}</td>
                  <td>{alert.cameraName}</td>
                  <td>
                    <button onClick={markAsFalse}>Mark as False</button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
            <tr>
              <td>Ronald Richards details Matching @ location: Entrance</td>
              <td>2024-10-16 14:40:44</td>
              <td>
                <span>
                  <img src="" alt=""></img>
                </span>
                Ronald Richards
              </td>
              <td>Entrance</td>
              <td>Cam- 001</td>
              <td>
                <button>Mark as False</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alert;
