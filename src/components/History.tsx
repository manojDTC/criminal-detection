import { useState, useEffect } from "react";
import image from "../assets/image 19.png";
import image1 from "../assets/image 20.png";
import cap from "../assets/cap.png";
import mask from "../assets/mask.png";
import null1 from "../assets/null.png";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

interface History {
  imageUrl: string;
  name: string;
  gender: string;
  dateTime: Date;
  poc: string;
  faceCover: string;
}

interface Camera {
  id: string;
  name: string;
  description: string;
  customerId: string;
}

const History = () => {
  const [detectionList, setDetectionList] = useState<History[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [fromDate, setFromDate] = useState<Date | null>(new Date());
  // const [toDate, setToDate] = useState<Date | null>(new Date());
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [cameraList, setCameraList] = useState<Camera[]>([]);
  const [selectedCamera, setSelectedCamera] = useState("");
  const [personType, setPersonType] = useState<string[]>([]);
  const [selectedPersonType, setSelectedPersonType] = useState<string>("");

  // Handle start date selection
  const handleFromDateChange = (date: Date | null) => {
    if (toDate && date && date > toDate) {
      toast.error("Start date cannot be later than the end date");
      alert("Start date cannot be later than the end date");
      return;
    } else {
      setFromDate(date!);
      const fDate = date;
      fetchHistory(selectedCamera, fDate, toDate, selectedPersonType);
    }
  };

  // Handle to date selection
  const handleToDateChange = (date: Date | null) => {
    if (fromDate && date && date < fromDate) {
      toast.error("End date cannot be earlier than the start date");
      alert("End date cannot be earlier than the start date");
    } else {
      setToDate(date!);
      const tDate = date;
      fetchHistory(selectedCamera, fromDate, tDate, selectedPersonType);
    }
  };

  const fetchHistory = async (
    camera: string,
    fromDate1: Date | null,
    toDate1: Date | null,
    type: string
  ) => {
    try {
      setLoading(true);
      let Fdate, Tdate;
      if (fromDate) {
        const tmpdate1 = new Date(fromDate1!);
        Fdate = tmpdate1.toISOString();
      }

      if (toDate) {
        const tmpdate2 = new Date(toDate1!);
        Tdate = tmpdate2.toISOString();
      }

      const data = {
        cameraId: camera,
        fromDate: Fdate,
        todate: Tdate,
        type: selectedPersonType,
      };

      const response = await axios.post<History[]>(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetHistory`,
        data
      );
      setDetectionList(response.data);
    } catch (error) {
      toast.error("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory(selectedCamera, fromDate, toDate, selectedPersonType);

    const fetchCameraList = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Camera[]>(
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetAllCameras`
        );
        setCameraList(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load Camera's");
      } finally {
        setLoading(false);
      }
    };

    fetchCameraList();

    const fetchPersonTypes = async () => {
      setLoading(true);
      try {
        const response = await axios.get<string[]>(
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetPersonTypes`
        );
        setPersonType(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load Persontype");
      } finally {
        setLoading(false);
      }
    };

    fetchPersonTypes();
  }, []);

  const getSelectedCamera = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const cameraId = event.target.value;
    setSelectedCamera(cameraId);
    fetchHistory(cameraId, fromDate, toDate, selectedPersonType);
  };

  const getSelectedPersonType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPersonType(event.target.value);
    fetchHistory(selectedCamera, fromDate, toDate, event.target.value);
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
              onChange={getSelectedCamera}
              value={selectedCamera}
            >
              <option value="" disabled>
                --Select Camera--
              </option>
              {cameraList.map((camera) => (
                <option key={camera.id} value={camera.id}>
                  {camera.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="camera">Date From</label>
            <br></br>
            <DatePicker
              customInput={
                <input
                  style={{
                    width: "300px",
                    padding: "10px",
                    background: "#EEF0F3",
                    borderRadius: "4px",
                    border: "0",
                    marginTop: "10px",
                  }}
                />
              }
              selected={fromDate}
              onChange={handleFromDateChange} // Use custom handler
              maxDate={toDate} // Restrict future dates beyond the end date
            />
          </div>
          <div>
            <label htmlFor="camera">Date To</label>
            <br></br>

            <DatePicker
              customInput={
                <input
                  style={{
                    width: "300px",
                    padding: "10px",
                    background: "#EEF0F3",
                    borderRadius: "4px",
                    border: "0",
                    marginTop: "10px",
                  }}
                />
              }
              selected={toDate}
              onChange={handleToDateChange} // Use custom handler
              minDate={fromDate} // Restrict dates before the start date
            />
          </div>
          <div>
            <label htmlFor="Ptype">Type</label>
            <br></br>

            <select
              name="Ptype"
              id="Ptype"
              style={{
                width: "300px",
                padding: "10px",
                background: "#EEF0F3",
                borderRadius: "4px",
                border: "0",
                marginTop: "10px",
              }}
              value={selectedPersonType}
              onChange={getSelectedPersonType}
            >
              <option value="" disabled selected>
                --Select Type--
              </option>
              {personType.map((person, index) => (
                <option key={index} value={person}>
                  {person}
                </option>
              ))}
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
              {detectionList.map((detection, index) => {
                const formattedDate = new Date(
                  detection.dateTime
                ).toLocaleString();

                const cover =
                  detection.faceCover === "Mask"
                    ? mask
                    : detection.faceCover === "Cap"
                    ? cap
                    : null1;
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={"data:image/jpeg;base64, " + detection.imageUrl}
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
                    <td>{detection.name}</td>
                    <td>{detection.gender}</td>
                    <td>{formattedDate}</td>
                    <td>{detection.poc}</td>
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
                      {detection.faceCover === "Mask"
                        ? "Mask Detected"
                        : detection.faceCover === "Cap"
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
  );
};

export default History;
