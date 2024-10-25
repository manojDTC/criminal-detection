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

interface Person {
  id: string;
  name: string;
  personType: string;
}

interface ImageDetails {
  id: string;
  imageUrl: string;
  personId: string;
}

interface Employee {
  id: number;
  name: string;
  gender: string;
  personType: string;
  role: string;
  code: string;
  email: string;
  contactNo: string;
  language: string;
  country: string;
  cameraName: string;
  images: ImageDetails[];
}

interface Criminal {
  id: string;
  name: string;
  gender: string;
  personType: string;
  code: string;
  email: string;
  contactNo: string;
  language: string;
  country: string;
  issuedBy: string;
  poc: string;
  originCity: string;
  crime: string;
  images: ImageDetails[];
}

const TimeLine = () => {
  const [timeline, setTimeline] = useState<Timeline[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [persons, setPersons] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState<Employee | null>(null);
  const [criminalDetails, setCriminalDetails] = useState<Criminal | null>(null);
  const [selectedPersonDetails, setSelectedPersonDetails] =
    useState<Person | null>({
      id: "",
      name: "",
      personType: "",
    });

  // Handle start date selection
  const handleFromDateChange = (date: Date | null) => {
    if (toDate && date && date > toDate) {
      toast.error("Start date cannot be later than the end date");
      alert("Start date cannot be later than the end date");
      return;
    } else {
      setFromDate(date!);
      const fDate = date;
      fetchTimeline(fDate, toDate, selectedPerson);
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
      fetchTimeline(fromDate, tDate, selectedPerson);
    }
  };

  const fetchTimeline = async (
    fromDateParams: Date | null,
    toDateParams: Date | null,
    person: string
  ) => {
    try {
      setLoading(true);
      let Fdate, Tdate;
      if (fromDateParams) {
        const tmpdate1 = new Date(fromDateParams!);
        Fdate = tmpdate1.toISOString();
      }

      if (toDateParams) {
        const tmpdate2 = new Date(toDateParams!);
        Tdate = tmpdate2.toISOString();
      }

      const data = {
        fromDate: Fdate,
        todate: Tdate,
        personId: person,
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
    const fetchPersons = async () => {
      try {
        setLoading(true);

        const response = await axios.get<Person[]>(
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetTimelineDetails`
        );
        setPersons(response.data);
      } catch (error) {
        toast.error("Failed to load persons");
      } finally {
        setLoading(false);
      }
    };

    fetchPersons();
    fetchTimeline(fromDate, toDate, selectedPerson);
  }, []);

  const getSelectedPerson = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    try {
      const personId = event.target.value;
      setSelectedPerson(personId);
      const personDetails = persons.find((person) => person.id === personId);
      setSelectedPersonDetails(personDetails!);

      setEmployeeDetails(null);
      setCriminalDetails(null);

      if (personDetails?.personType === "Employee") {
        const response = await axios.get<Employee>(
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetEmployeeById?Id=${personId}`
        );
        setEmployeeDetails(response.data);
      } else {
        const response = await axios.get<Criminal>(
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetCriminalById?Id=${personId}`
        );
        setCriminalDetails(response.data);
      }

      fetchTimeline(fromDate, toDate, personId);
    } catch {
      toast.error("Error");
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
              onChange={getSelectedPerson}
              value={selectedPerson}
            >
              <option value="" selected disabled>
                --Select Name--
              </option>
              {persons.map((person) => (
                <option key={person.id} value={person.id}>
                  {person.name}
                </option>
              ))}
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
            {selectedPersonDetails!.personType &&
              (employeeDetails?.images[0] || criminalDetails?.images[0]) && (
                <img
                  src={
                    selectedPersonDetails!.personType.toLocaleLowerCase() ===
                    "employee"
                      ? `${process.env.REACT_APP_BASE_URL}/${
                          employeeDetails?.images[0]!.imageUrl
                        }`
                      : `${process.env.REACT_APP_BASE_URL}/${
                          criminalDetails?.images[0]!.imageUrl
                        }`
                  }
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                    height: "66px",
                    width: "66px",
                    objectFit: "contain",
                  }}
                ></img>
              )}
            <div>
              <p style={{ margin: "0", fontSize: "14px" }}>
                {selectedPersonDetails!.personType.toLocaleLowerCase() ===
                "employee"
                  ? employeeDetails?.name
                  : criminalDetails?.name}
              </p>
              {selectedPersonDetails!.personType.toLocaleLowerCase() ===
                "criminal" && <span style={{ fontSize: "8px" }}>Criminal</span>}
            </div>
          </div>
          {selectedPersonDetails!.personType.toLocaleLowerCase() ===
            "criminal" && (
            <>
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
                  <p style={{ margin: "0", fontSize: "14px" }}>
                    {criminalDetails?.issuedBy}
                  </p>
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
                    {criminalDetails?.poc}
                  </p>
                  <span style={{ fontSize: "8px" }}>POC</span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "12px" }}>
                  <b>Suspected ID</b>: {criminalDetails?.code}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "12px" }}>
                  <b>Origin City</b>: {criminalDetails?.originCity}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "12px" }}>
                  <b>Crime</b>: {criminalDetails?.crime}
                </p>
              </div>
            </>
          )}
          {selectedPersonDetails?.personType && (
            <>
              <div>
                <p style={{ fontSize: "12px" }}>
                  <b>Langauage</b>:{" "}
                  {selectedPersonDetails!.personType.toLocaleLowerCase() ===
                  "employee"
                    ? employeeDetails?.language
                    : criminalDetails?.language}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "12px" }}>
                  <b>Country</b>:{" "}
                  {selectedPersonDetails!.personType.toLocaleLowerCase() ===
                  "employee"
                    ? employeeDetails?.country
                    : criminalDetails?.country}
                </p>
              </div>
            </>
          )}
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
