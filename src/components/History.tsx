import { useState, useEffect } from "react";
import image from "../assets/image 19.png";
import image1 from "../assets/image 20.png";
import cap from "../assets/cap.png";
import mask from "../assets/mask.png";
import null1 from "../assets/null.png";
import { toast } from "react-toastify";

interface History {
  eventId: number;
  imageUrl: string;
  name: string;
  gender: string;
  timeStamp: Date;
  POC: string;
  faceCoverage: string;
}

const History = () => {
  const [history, setHistory] = useState<History[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // const response = await axios.get<History[]>(
        //   `${process.env.REACT_APP_BASE_URL}/`
        // );
        //setHistory(response.data);
      } catch (error) {
        toast.error("Failed to load history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

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
          background: "white",
          padding: "20px 15px ",
          borderRadius: "6px",
          marginBottom: "15px",
        }}
      >
        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <div>
            <label htmlFor="camera">Select Camera</label>
            <br></br>

            <select
              name="camera"
              id="camera"
              style={{
                width: "300px",
                padding: "10px",
                background: "#EEF0F3",

                borderRadius: "4px",
                border: "0",
                marginTop: "10px",
              }}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label htmlFor="camera">Date From</label>
            <br></br>

            <select
              name="camera"
              id="camera"
              style={{
                width: "300px",
                padding: "10px",
                background: "#EEF0F3",
                borderRadius: "4px",
                border: "0",
                marginTop: "10px",
              }}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label htmlFor="camera">Date To</label>
            <br></br>

            <select
              name="camera"
              id="camera"
              style={{
                width: "300px",
                padding: "10px",
                background: "#EEF0F3",
                borderRadius: "4px",
                border: "0",
                marginTop: "10px",
              }}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label htmlFor="camera">Type</label>
            <br></br>

            <select
              name="camera"
              id="camera"
              style={{
                width: "300px",
                padding: "10px",
                background: "#EEF0F3",
                borderRadius: "4px",
                border: "0",
                marginTop: "10px",
              }}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div style={{ height: "calc(100vh - 200px)", overflow: "scroll" }}>
          <table className="dbtable criminaltable">
            <tbody>
              <tr>
                <th>Event ID</th>
                <th>Screenshot</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Time Stamp</th>
                <th>POC</th>
                <th>Face Coverage</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "46px",
                      width: "46px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      margin: "5px",
                    }}
                  ></img>
                </td>
                <td>Roy Thomas</td>
                <td>M</td>
                <td>2024-10-16 14:40:44</td>
                <td>CP Mumbai</td>
                <td>
                  <span style={{ verticalAlign: "middle" }}>
                    <img
                      src={null1}
                      alt="null"
                      style={{
                        marginRight: "5px",
                        height: "15px",
                        width: "15pxs",
                      }}
                    ></img>
                  </span>
                  null
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "46px",
                      width: "46px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      margin: "5px",
                    }}
                  ></img>
                </td>
                <td>Roy Thomas</td>
                <td>M</td>
                <td>2024-10-16 14:40:44</td>
                <td>CP Mumbai</td>
                <td>
                  <span style={{ verticalAlign: "middle" }}>
                    <img
                      src={null1}
                      alt="null"
                      style={{
                        marginRight: "5px",
                        height: "15px",
                        width: "15pxs",
                      }}
                    ></img>
                  </span>
                  null
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "46px",
                      width: "46px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      margin: "5px",
                    }}
                  ></img>
                </td>
                <td>Roy Thomas</td>
                <td>M</td>
                <td>2024-10-16 14:40:44</td>
                <td>CP Mumbai</td>
                <td>
                  <span style={{ verticalAlign: "middle" }}>
                    <img
                      src={null1}
                      alt="null"
                      style={{
                        marginRight: "5px",
                        height: "15px",
                        width: "15pxs",
                      }}
                    ></img>
                  </span>
                  null
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "46px",
                      width: "46px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      margin: "5px",
                    }}
                  ></img>
                </td>
                <td>Roy Thomas</td>
                <td>M</td>
                <td>2024-10-16 14:40:44</td>
                <td>CP Mumbai</td>
                <td>
                  <span style={{ verticalAlign: "middle" }}>
                    <img
                      src={null1}
                      alt="null"
                      style={{
                        marginRight: "5px",
                        height: "15px",
                        width: "15pxs",
                      }}
                    ></img>
                  </span>
                  null
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "46px",
                      width: "46px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      margin: "5px",
                    }}
                  ></img>
                </td>
                <td>Roy Thomas</td>
                <td>M</td>
                <td>2024-10-16 14:40:44</td>
                <td>CP Mumbai</td>
                <td>
                  <span style={{ verticalAlign: "middle" }}>
                    <img
                      src={null1}
                      alt="null"
                      style={{
                        marginRight: "5px",
                        height: "15px",
                        width: "15pxs",
                      }}
                    ></img>
                  </span>
                  null
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "46px",
                      width: "46px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      margin: "5px",
                    }}
                  ></img>
                </td>
                <td>Roy Thomas</td>
                <td>M</td>
                <td>2024-10-16 14:40:44</td>
                <td>CP Mumbai</td>
                <td>
                  <span style={{ verticalAlign: "middle" }}>
                    <img
                      src={null1}
                      alt="null"
                      style={{
                        marginRight: "5px",
                        height: "15px",
                        width: "15pxs",
                      }}
                    ></img>
                  </span>
                  null
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "46px",
                      width: "46px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      margin: "5px",
                    }}
                  ></img>
                </td>
                <td>Roy Thomas</td>
                <td>M</td>
                <td>2024-10-16 14:40:44</td>
                <td>CP Mumbai</td>
                <td>
                  <span style={{ verticalAlign: "middle" }}>
                    <img
                      src={null1}
                      alt="null"
                      style={{
                        marginRight: "5px",
                        height: "15px",
                        width: "15pxs",
                      }}
                    ></img>
                  </span>
                  null
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "46px",
                      width: "46px",
                      objectFit: "contain",
                      borderRadius: "50%",
                      margin: "5px",
                    }}
                  ></img>
                </td>
                <td>Roy Thomas</td>
                <td>M</td>
                <td>2024-10-16 14:40:44</td>
                <td>CP Mumbai</td>
                <td>
                  <span style={{ verticalAlign: "middle" }}>
                    <img
                      src={null1}
                      alt="null"
                      style={{
                        marginRight: "5px",
                        height: "15px",
                        width: "15pxs",
                      }}
                    ></img>
                  </span>
                  null
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
