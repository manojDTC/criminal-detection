import React, { useEffect, useState } from "react";
import image from "../assets/image 19.png";
import image1 from "../assets/image 20.png";
import cap from "../assets/cap.png";
import mask from "../assets/mask.png";
import null1 from "../assets/null.png";
import axios from "axios";
import { toast } from "react-toastify";

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
    fetchLiveDetections();
    fetchCriminalDetections();
  }, []);

  const getSelectedCamera = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCameraLiveUrl("");
    const cameraId = event.target.value;
    const camera = cameraLists.find((camera) => camera.id === cameraId);
    setSelectedCameraDetails(camera);
    setSelectedCamera(cameraId);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/Person/GetLiveURL/cameraId=${cameraId}`
    );

    setSelectedCameraLiveUrl(response.data);
    const intervalId = setInterval(fetchLiveDetections, 5000);
    const criminalIntervalId = setInterval(fetchCriminalDetections, 5000);
    return () => {
      clearInterval(intervalId);
      clearInterval(criminalIntervalId);
    };
  };

  const getSelectedType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
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

  const fetchCriminalDetections = async () => {
    try {
      const response = await axios.get<LiveDetection[]>(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetDetection?Type=${selectedType}`
      );

      setCriminalDetectionList(response.data);
    } catch (error) {
      toast.error("Failed to criminal live detection");
    }
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
            <p>Live Feed</p>
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
                style={{ width: "100%" }}
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
                        <tr>
                          <td>
                            <img
                              src={criminalDetection.imageUrl}
                              alt=""
                              style={{
                                height: "66px",
                                width: "66px",
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
                        <tr key={index}>
                          <td>
                            <img
                              src={livedetection.imageUrl}
                              alt=""
                              style={{
                                height: "66px",
                                width: "66px",
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
    </div>
  );
};

export default Live;
