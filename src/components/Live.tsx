import image from "../assets/image 19.png";
import image1 from "../assets/image 20.png";
import cap from "../assets/cap.png";
import mask from "../assets/mask.png";
import null1 from "../assets/null.png";

const Live = () => {
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
          gap: "10px",
        }}
      >
        <div style={{ flex: "0 0 50%" }}>
          <div
            style={{
              background: "white",
              padding: "20px 15px ",
              borderRadius: "6px",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="camera">Select Camera</label>
            <br></br>

            <select
              name="camera"
              id="camera"
              style={{
                width: "100%",
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
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                flex: "0  0 44%",
                background: "white",
                padding: "15px",
                borderRadius: "6px",
              }}
            >
              <p style={{ marginTop: "0", fontSize: "14px" }}>
                Camera Location
              </p>
              <p
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  background: "#9333EA",
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "600",
                  margin: "0",
                }}
              >
                Entrance
              </p>
            </div>
            <div
              style={{
                flex: "0  0 44%",
                background: "white",
                padding: "15px",
                borderRadius: "6px",
              }}
            >
              <p style={{ marginTop: "0", fontSize: "14px" }}>Status</p>
              <p
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  background: "#8AC53E",

                  fontSize: "14px",
                  color: "white",
                  fontWeight: "600",
                  margin: "0",
                }}
              >
                Active
              </p>
            </div>
          </div>
          <div
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "6px",
              marginTop: "10px",
            }}
          >
            <p>Live Feed</p>
            <iframe title="live feed" src="" style={{ width: "100%" }}></iframe>
          </div>
        </div>
        <div style={{ flex: "0 0 50%" }}>
          <div>
            <div
              style={{
                background: "white",
                padding: "20px 15px ",
                borderRadius: "6px",
                marginBottom: "15px",
              }}
            >
              <label htmlFor="camera">Today's Detection</label>
              <br></br>
              <select
                name="camera"
                id="camera"
                style={{
                  width: "300px",
                  padding: "10px",
                  background: "#DBE4F4",
                  borderRadius: "4px",
                  border: "0",
                  marginTop: "10px",
                }}
              >
                <option value="criminal">Criminal</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <div style={{ height: "250px", overflow: "scroll" }}>
                <table className="dbtable criminaltable">
                  <tbody>
                    <tr>
                      <th>Captured</th>
                      <th>Gender</th>
                      <th>Details</th>
                      <th>Face Coverage</th>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={image}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
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
                      <td>
                        <img
                          src={image1}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
                      <td>
                        <span style={{ verticalAlign: "middle" }}>
                          <img
                            src={cap}
                            alt="cap"
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
                      <td>
                        <img
                          src={image}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
                      <td>
                        <span style={{ verticalAlign: "middle" }}>
                          <img
                            src={mask}
                            alt="mask"
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
                      <td>
                        <img
                          src={image}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
                      <td>
                        <span>
                          <img src={null1} alt="null"></img>
                        </span>
                        null
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={image}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
                      <td>
                        <span>
                          <img src={null1} alt="null"></img>
                        </span>
                        null
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p>
                <span
                  style={{
                    height: "10px",
                    width: "10px",
                    background: "green",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                ></span>
                Live Detections
              </p>
              <div style={{ height: "250px", overflow: "scroll" }}>
                <table className="dbtable criminaltable">
                  <tbody>
                    <tr>
                      <th>Captured</th>
                      <th>Gender</th>
                      <th>Details</th>
                      <th>Face Coverage</th>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={image}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
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
                      <td>
                        <img
                          src={image1}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
                      <td>
                        <span style={{ verticalAlign: "middle" }}>
                          <img
                            src={cap}
                            alt="cap"
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
                      <td>
                        <img
                          src={image}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
                      <td>
                        <span style={{ verticalAlign: "middle" }}>
                          <img
                            src={mask}
                            alt="mask"
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
                      <td>
                        <img
                          src={image}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
                      <td>
                        <span>
                          <img src={null1} alt="null"></img>
                        </span>
                        null
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={image}
                          alt=""
                          style={{
                            height: "66px",
                            width: "66px",
                            objectFit: "contain",
                          }}
                        ></img>
                      </td>
                      <td>M</td>
                      <td>E-101</td>
                      <td>
                        <span>
                          <img src={null1} alt="null"></img>
                        </span>
                        null
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
