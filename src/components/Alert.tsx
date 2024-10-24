import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface Alert {
  alertList: string;
  dateTime: Date;
  imageUrl: string;
  name: string;
  location: string;
  camera: string;
}

const Alert = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      setLoading(true);

      const response = await axios.get<Alert[]>(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetAlert`
      );
      setAlerts(response.data);
    } catch (error) {
      toast.error("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

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
        position: "relative",
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
      <div
        style={{
          overflow: "auto",
          maxHeight: "calc(100vh - 130px)",
        }}
      >
        {loading ? (
          <p
            style={{
              position: "absolute",
              top: "40%",
              width: "100%",
              textAlign: "center",
            }}
          >
            Loading...
          </p>
        ) : (
          ""
        )}
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
              const formattedDate = new Date(alert.dateTime).toLocaleString();
              return (
                <tr>
                  <td>{alert.alertList}</td>
                  <td>{formattedDate}</td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <span>
                      <img
                        src={"data:image/jpeg;base64, " + alert.imageUrl}
                        style={{
                          borderRadius: "50%",
                          height: "46px",
                          width: "46px",
                          objectFit: "contain",
                        }}
                        alt=""
                      ></img>
                    </span>
                    {alert.name}
                  </td>
                  <td>{alert.location}</td>
                  <td>{alert.camera}</td>
                  <td>
                    <button onClick={markAsFalse}>Mark as False</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alert;
