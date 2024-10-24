import { useState, useEffect } from "react";
import image from "../assets/image 19.png";
import star from "../assets/start.png";
import tick from "../assets/tick.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";

interface Timeline {
  imageUrl: string;
  camera: string;
  location: string;
  dateTime: Date;
}

const TimeLine = () => {
  const [timeline, setTimeline] = useState<Timeline[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);

  // Handle start date selection
  const handleFromDateChange = (date: Date | null) => {
    if (toDate && date && date > toDate) {
      toast.error("Start date cannot be later than the end date");
      alert("Start date cannot be later than the end date");
      return;
    } else {
      setFromDate(date || undefined);
      fetchTimeline();
    }
  };

  // Handle to date selection
  const handleToDateChange = (date: Date | null) => {
    if (fromDate && date && date < fromDate) {
      toast.error("End date cannot be earlier than the start date");
      alert("End date cannot be earlier than the start date");
    } else {
      setToDate(date || undefined);
      fetchTimeline();
    }
  };

  const fetchTimeline = async () => {
    try {
      setLoading(true);
      const data = {
        cameraId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        fromDate: "2024-10-23T09:40:54.809Z",
        todate: "2024-10-23T09:40:54.809Z",
        type: "string",
      };
      const response = await axios.post<Timeline[]>(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetTimeline`,
        data
      );
      setTimeline(response.data);
    } catch (error) {
      toast.error("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimeline();
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
            <label htmlFor="name">Name:</label>
            <br></br>
            <select
              id="name"
              name="name"
              style={{
                width: "300px",
                padding: "10px",
                background: "#EEF0F3",
                borderRadius: "4px",
                border: "0",
                marginTop: "10px",
              }}
            >
              <option value="" selected disabled>
                --Select Name--
              </option>
              <option value="name1">Name1</option>
              <option value="name2">Name2</option>
              <option value="name3">Name3</option>
              <option value="name4">Name4</option>
              <option value="name5">Name5</option>
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
          {timeline.map((time) => {
            const formattedDate = new Date(time.dateTime).toLocaleString();
            return (
              <div>
                <img
                  src={"data:image/jpeg;base64, " + time.imageUrl}
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
                    {formattedDate}
                  </p>
                  <span style={{ fontSize: "10px" }}>{time.camera}</span>
                  <br></br>
                  <span style={{ fontSize: "10px" }}>{time.location}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
