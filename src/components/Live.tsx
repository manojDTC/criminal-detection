import React, { useEffect, useState } from "react";
import image from "../assets/image 19.png";
import image1 from "../assets/image 20.png";
import cap from "../assets/cap.png";
import mask from "../assets/mask.png";
import null1 from "../assets/null.png";
import axios from "axios";
import { toast } from "react-toastify";
import star from "../assets/start.png";
import tick from "../assets/tick.png";

interface Camera {
  id: string;
  name: string;
  area: string;
  isActive: boolean;
  customerId: string;
}

interface LiveDetection {
  imageUrl: string;
  gender: string;
  details: string;
  faceCover: string;
}

// interface

const Live = () => {
  const [cameraLists, setCameraLists] = useState<Camera[]>([]);
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedCameraDetails, setSelectedCameraDetails] =
    useState<Camera | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCameraLiveUrl, setSelectedCameraLiveUrl] =
    useState<string>("");
  const [liveDetectionList, setLiveDetectionList] = useState<
    LiveDetection[] | null
  >(null);
  const [selectedType, setSelectedType] = useState<string>("Criminal");
  const [criminalDetectionList, setCriminalDetectionList] = useState<
    LiveDetection[] | null
  >(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchCameraList = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Camera[]>(
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetAllCameras`
        );
        setCameraLists(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load Camera's");
      } finally {
        setLoading(false);
      }
    };

    fetchCameraList();
  }, []);

  const getSelectedCamera = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCameraLiveUrl("");
    const cameraId = event.target.value;
    const camera = cameraLists.find((camera) => camera.id === cameraId);
    setSelectedCameraDetails(camera);
    setSelectedCamera(cameraId);
    setLiveDetectionList([]);
    setCriminalDetectionList([]);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetLiveURL?cameraId=${cameraId}`
      );
      setSelectedCameraLiveUrl(response.data);
    } catch (error) {
      toast.error("Failed to fetch live feed");
    }

    const intervalId = setInterval(fetchLiveDetections, 5000);
    const criminalIntervalId = setInterval(fetchCriminalDetections, 5000);
    return () => {
      clearInterval(intervalId);
      clearInterval(criminalIntervalId);
    };
  };

  const getSelectedType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
    fetchCriminalDetections(event.target.value);
  };

  const fetchLiveDetections = async () => {
    try {
      const response = await axios.get<LiveDetection[]>(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetLiveDetection`
      );

      setLiveDetectionList(response.data);
    } catch (error) {
      toast.error("Failed to fetch live detection");
    }
  };

  const fetchCriminalDetections = async (type: string = "Criminal") => {
    try {
      const response = await axios.get<LiveDetection[]>(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetDetection?Type=${type}`
      );

      setCriminalDetectionList(response.data);
    } catch (error) {
      toast.error("Failed to criminal live detection");
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
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
              onChange={getSelectedCamera}
              value={selectedCamera}
            >
              <option value="" disabled>
                Select Camera
              </option>
              {cameraLists.map((camera) => (
                <option key={camera.id} value={camera.id}>
                  {camera.name}
                </option>
              ))}
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
                  height: "19px",
                }}
              >
                {selectedCameraDetails && selectedCameraDetails.area}
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
                  height: "19px",
                }}
              >
                {selectedCameraDetails?.isActive ? "Active" : "Not Active"}
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
            <p style={{ marginTop: "0px" }}>Live Feed</p>
            <div style={{ position: "relative" }}>
              {loading ? (
                <p
                  style={{
                    position: "absolute",
                    top: "40%",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  loading... Please wait
                </p>
              ) : (
                ""
              )}
              <iframe
                title="live feed"
                src={selectedCameraLiveUrl}
                style={{ width: "100%", height: "360px" }}
              ></iframe>
            </div>
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
                onChange={getSelectedType}
                value={selectedType}
              >
                <option value="Criminal">Criminal</option>
                <option value="VIP">VIP</option>
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
                    {criminalDetectionList?.map((criminalDetection) => {
                      const cover =
                        criminalDetection.faceCover === "Mask"
                          ? mask
                          : criminalDetection.faceCover === "Cap"
                          ? cap
                          : null1;
                      return (
                        <tr key={criminalDetection.imageUrl}>
                          <td>
                            <img
                              src={
                                "data:image/jpeg;base64, " +
                                criminalDetection.imageUrl
                              }
                              alt=""
                              style={{
                                height: "46px",
                                width: "46px",
                                objectFit: "contain",
                              }}
                            ></img>
                          </td>
                          <td>{criminalDetection.gender}</td>
                          <td>{criminalDetection.details}</td>
                          <td>
                            <span style={{ verticalAlign: "middle" }}>
                              <img
                                src={cover}
                                alt="null"
                                style={{
                                  marginRight: "5px",
                                  height: "15px",
                                  width: "15pxs",
                                }}
                              ></img>
                            </span>
                            {criminalDetection.faceCover === "Mask"
                              ? "Mask Detected"
                              : criminalDetection.faceCover === "Cap"
                              ? "Cap Detected"
                              : "null"}
                          </td>
                        </tr>
                      );
                    })}
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
                <table className="dbtable livetable">
                  <tbody>
                    <tr>
                      <th>Captured</th>
                      <th>Gender</th>
                      <th>Details</th>
                      <th>Face Coverage</th>
                    </tr>
                    {liveDetectionList?.map((livedetection, index) => {
                      const cover =
                        livedetection.faceCover === "Mask"
                          ? mask
                          : livedetection.faceCover === "Cap"
                          ? cap
                          : null1;
                      return (
                        <tr key={index} onClick={openModal}>
                          <td>
                            <img
                              src={
                                "data:image/jpeg;base64, " +
                                livedetection.imageUrl
                              }
                              alt=""
                              style={{
                                height: "46px",
                                width: "46px",
                                objectFit: "contain",
                              }}
                            ></img>
                          </td>
                          <td>{livedetection.gender}</td>
                          <td>{livedetection.details}</td>
                          <td>
                            <span style={{ verticalAlign: "middle" }}>
                              <img
                                src={cover}
                                alt="null"
                                style={{
                                  marginRight: "5px",
                                  height: "15px",
                                  width: "15pxs",
                                }}
                              ></img>
                            </span>
                            {livedetection.faceCover === "Mask"
                              ? "Mask Detected"
                              : livedetection.faceCover === "Cap"
                              ? "Cap Detected"
                              : "null"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="modal timelineModal">
          <div className="modal-content timelineModal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
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
                  margin: "10px 0",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
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
                    <p style={{ margin: "0", fontSize: "14px" }}>
                      William Jhonson
                    </p>
                    <span style={{ fontSize: "8px" }}>Criminal</span>
                  </div>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
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
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
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
                    <p style={{ margin: "0", fontSize: "14px" }}>
                      CP Bengaluru
                    </p>
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
                height: "calc(100vh - 330px)",
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Live;
