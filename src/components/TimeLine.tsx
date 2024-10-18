import React from "react";
import image from "../assets/image 19.png";
import star from "../assets/start.png";
import tick from "../assets/tick.png";
const TimeLine = () => {
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
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              src={image}
              alt="profile"
              style={{
                borderRadius: "50%",
                height: "66px",
                width: "66px",
                objectFit: "contain",
              }}
            ></img>
            <div>
              <p style={{ margin: "0", fontSize: "14px" }}>William Jhonson</p>
              <span style={{ fontSize: "8px" }}>Criminal</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              src={star}
              alt="star"
              style={{
                height: "30px",
                width: "30px",
                objectFit: "contain",
              }}
            ></img>
            <div>
              <p style={{ margin: "0", fontSize: "14px" }}>CBI</p>
              <span style={{ fontSize: "8px" }}>Issued By</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              src={tick}
              alt="tick"
              style={{
                height: "30px",
                width: "30px",
                objectFit: "contain",
              }}
            ></img>
            <div>
              <p style={{ margin: "0", fontSize: "14px" }}>CP Bengaluru</p>
              <span style={{ fontSize: "8px" }}>POC</span>
            </div>
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>
              <b>Suspected ID</b>: 101
            </p>
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>
              <b>Origin City</b>: London
            </p>
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>
              <b>Crime</b>: Robbery
            </p>
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>
              <b>Langauage</b>: English
            </p>
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>
              <b>Country</b>: England
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          padding: "20px 15px ",
          borderRadius: "6px",
          marginBottom: "15px",
          height: "calc(100vh - 335px)",
          overflow: "scroll",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: "20px",
            justifyItems: "center",
          }}
        >
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>{" "}
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>{" "}
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>{" "}
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>{" "}
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>{" "}
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>{" "}
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>{" "}
          <div>
            <img
              src={image}
              alt=""
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                border: "5px solid purple",
              }}
            ></img>
            <div>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                10:00AM 12/08/24
              </p>
              <span style={{ fontSize: "10px" }}>Camera 1</span>
              <br></br>
              <span style={{ fontSize: "10px" }}>Entrance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
