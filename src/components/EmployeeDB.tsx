/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Tabs from "rc-tabs";
import "rc-tabs/assets/index.css";
import axios from "axios";
import { toast } from "react-toastify";
import UploadImage from "../assets/image-upload.png";
import thumbnail from "../assets/default-thumbnail-profile.png";

interface ImageDetails {
  id: string;
  imageUrl: string;
  personId: string;
}

interface Employee {
  id: string;
  name: string;
  gender: string;
  personType: string;
  role: string;
  code: string;
  email: string;
  contactNo: string;
  language: string;
  country: string;
  images?: ImageDetails[];
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

export const personType = [
  "Resident",
  "Guest",
  "Delivery Agent",
  "Domestic Help",
  "Employee",
  "Black List",
];

const InitialEmployee = {
  id: "00000000-0000-0000-0000-000000000000",
  name: "",
  gender: "male",
  personType: "",
  role: "",
  code: "",
  email: "",
  contactNo: "",
  language: "",
  country: "india",
  images: [],
};

export const cities = [
  "Jaipur ",
  "Surat",
  " Pune",
  " Ahmedabad",
  " Hyderabad ",
  "Bangalore",
  " Chennai ",
  "Kolkata",
  "Mumbai",
];

export const languages = [
  "Hindi",
  "Bengali",
  "Telugu",
  "Marathi",
  "Tamil",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Odia",
  "Punjabi",
  "English",
];

const InitialCriminal = {
  id: "00000000-0000-0000-0000-000000000000",
  name: "",
  gender: "male",
  personType: "Black List",
  code: "",
  email: "",
  contactNo: "",
  language: "",
  country: "india",
  issuedBy: "CBI",
  poc: "",
  originCity: "",
  crime: "",
  images: [],
};
const EmployeeDB = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [criminals, setCriminal] = useState<Criminal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState<string | null>("1");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<Employee>(InitialEmployee);
  const [progress, setProgress] = useState<number>(0);
  const [formDataCriminal, setFormDataCriminal] =
    useState<Criminal>(InitialCriminal);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    personId: string
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("Images", files[i]); // Append all files under "Images" key
    }
    formData.append("PersonId", personId);

    const totalSize = Array.from(files).reduce(
      (acc, file) => acc + file.size,
      0
    );

    setUploading(true);
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/Person/AddImage`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const loaded = progressEvent.loaded ?? 0;

            // Calculate the overall upload percentage
            const overallPercentage = Math.min(
              Math.round((loaded * 100) / totalSize),
              100
            );

            // Update progress with the overall percentage
            setProgress(overallPercentage);
          },
        }
      );
      fetchEmployees();
      fetchCriminals();
      toast.success("Images Added Successfully");
    } catch (error) {
      toast.error("Error uploading images");
      console.error("Error uploading images:", error);
    } finally {
      setUploading(false);
      setProgress(0); // Reset progress after upload completes
      event.target.value = ""; // Clear the input field
    }
  };
  const fetchEmployees = async () => {
    try {
      const response = await axios.get<Employee[]>(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetEmployeesImages`
      );
      setEmployees(response.data);
    } catch (error) {
      toast.error("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  const fetchCriminals = async () => {
    try {
      const response = await axios.get<Criminal[]>(
        `${process.env.REACT_APP_BASE_URL}/api/Person/GetCriminalsImages`
      );
      setCriminal(response.data);
    } catch (error) {
      toast.error("Failed to load Blacklist");
      setError("Failed to load Blacklist");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEmployees();

    if (key === "1") {
      fetchEmployees();
    }

    if (key === "2") {
      fetchCriminals();
    }
  }, [key]);

  const callback = (key: string) => {
    setKey(key);
  };

  // Open modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeCrime = (e: any) => {
    const { name, value } = e.target;
    setFormDataCriminal((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(formData);

    const errors = [];
    if (formData.name == "") errors.push("Name is required.");
    if (formData.personType == "") errors.push("Person Type is required.");
    if (formData.role == "") errors.push("Role is required.");
    if (formData.code == "") errors.push("Code is required.");
    if (formData.email == "") errors.push("Email is required.");
    if (formData.contactNo == "") errors.push("Contact Number is required.");
    if (formData.language == "") errors.push("Language is required.");
    if (formData.country == "") errors.push("Country is required.");

    // Show errors if any
    if (errors.length === 1) {
      toast.error(errors[0]);
    } else if (errors.length > 1) {
      toast.error("Fill all the fields");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/Person/AddEmployee`,
          formData, // Use formData as the payload for the POST request
          {
            headers: {
              "Content-Type": "application/json", // Set the appropriate header for form data
            },
          }
        );

        toast.success("Person Added Successfully");
        setFormData(InitialEmployee);
        setIsOpen(false);
        fetchEmployees();
      } catch (error: any) {
        toast.error("Failed to add Person");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmitCrime = async () => {
    console.log(formDataCriminal);
    const errors = [];

    // Validate criminal form data
    if (formDataCriminal.name === "") errors.push("Name is required.");
    if (formDataCriminal.gender === "") errors.push("Gender is required.");
    if (formDataCriminal.personType === "")
      errors.push("Person Type is required.");
    if (formDataCriminal.code === "") errors.push("Code is required.");
    if (formDataCriminal.email === "") errors.push("Email is required.");
    if (formDataCriminal.contactNo === "")
      errors.push("Contact Number is required.");
    if (formDataCriminal.language === "") errors.push("Language is required.");
    if (formDataCriminal.country === "") errors.push("Country is required.");
    if (formDataCriminal.issuedBy === "") errors.push("Issued By is required.");
    if (formDataCriminal.poc === "")
      errors.push("Point of Contact is required.");
    if (formDataCriminal.originCity === "")
      errors.push("Origin City is required.");
    if (formDataCriminal.crime === "") errors.push("Crime is required.");

    // Show errors if any
    if (errors.length === 1) {
      toast.error(errors[0]);
    } else if (errors.length > 1) {
      toast.error("Fill all the fields");
    } else {
      setLoading(true); // Ensure loading is set to true before starting the request
      try {
        // Submit criminal data
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/Person/AddCriminal`,
          formDataCriminal, // Use formDataCriminal as the payload for the POST request
          {
            headers: {
              "Content-Type": "application/json", // Set the appropriate header for form data
            },
          }
        );

        toast.success("Blacklist Record Added Successfully");
        setFormDataCriminal(InitialCriminal); // Reset the criminal form data
        setIsOpen(false);
        fetchCriminals();
      } catch (error: any) {
        toast.error("Failed to add Blacklist record");
      } finally {
        setLoading(false);
      }
    }
  };

  const items = [
    {
      key: "1",
      label: <p style={{ fontSize: "16px" }}>Person List</p>,
      children: (
        <div className="text-xl">
          {loading ? (
            <p style={{ textAlign: "center", alignContent: "center" }}>
              Loading...
            </p>
          ) : (
            <div style={{ overflow: "auto", maxHeight: "calc(100vh - 220px)" }}>
              <table className="dbtable">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th> Id</th>
                    <th>Role</th>
                    <th>Total Images</th>
                    <th>Actions</th>
                  </tr>

                  {employees.map((employee) => {
                    const totalImages =
                      employee && employee.images && employee.images.length;
                    const firstImageUrl =
                      employee && employee.images && employee.images.length > 0
                        ? `${process.env.REACT_APP_BASE_URL}/${employee.images[0].imageUrl}`
                        : thumbnail;
                    return (
                      <tr key={employee.id}>
                        <td
                          style={{
                            display: "flex",
                            // justifyContent: "center",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            <img
                              style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                              src={`${firstImageUrl}`}
                              alt=""
                            ></img>
                          </span>
                          {employee.name}
                        </td>
                        <td>{employee.gender}</td>
                        <td>{employee.code}</td>
                        <td>{employee.role}</td>
                        {/* <td>{employee.cameraName}</td> */}
                        <td>{totalImages}</td>
                        <td>
                          <label style={{ cursor: "pointer" }}>
                            <img
                              src={UploadImage}
                              alt="Upload"
                              style={{ width: "30px" }}
                            />
                            <input
                              type="file"
                              accept="image/*"
                              multiple // Allow multiple files to be selected
                              onChange={(event) =>
                                handleImageUpload(event, employee.id)
                              } // Pass employee.id here
                              style={{ display: "none" }} // Hide the file input
                            />
                          </label>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ),
    },
    {
      key: "2",
      label: <p style={{ marginLeft: "10px", fontSize: "16px" }}>Blaklists</p>,
      children: (
        <div>
          {loading ? (
            <p style={{ textAlign: "center", alignContent: "center" }}>
              Loading...
            </p>
          ) : (
            <div style={{ overflow: "auto", maxHeight: "calc(100vh - 220px)" }}>
              <table className="dbtable">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Suspected Id</th>
                    <th>Issued By</th>
                    <th>POC</th>
                    <th>Total Images</th>
                    <th>Actions</th>
                  </tr>
                  {criminals.map((criminal) => {
                    const totalImages = criminal.images.length;
                    const firstImageUrl =
                      criminal.images.length > 0
                        ? `${process.env.REACT_APP_BASE_URL}/${criminal.images[0].imageUrl}`
                        : thumbnail;
                    return (
                      <tr key={criminal.id}>
                        <td
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <span>
                            <img
                              style={{
                                height: "40px",
                                borderRadius: "50%",
                                width: "40px",
                                objectFit: "cover",
                              }}
                              src={`${firstImageUrl}`}
                              alt=""
                            ></img>
                          </span>
                          {criminal.name}
                        </td>
                        <td>{criminal.gender}</td>
                        <td>{criminal.code}</td>
                        <td>{criminal.issuedBy}</td>
                        <td>{criminal.poc}</td>
                        <td>{totalImages}</td>
                        <td>
                          <label style={{ cursor: "pointer" }}>
                            <img
                              src={UploadImage}
                              alt="Upload"
                              style={{ width: "30px" }}
                            />
                            <input
                              type="file"
                              accept="image/*"
                              multiple // Allow multiple files to be selected
                              onChange={(event) =>
                                handleImageUpload(event, criminal.id)
                              } // Pass employee.id here
                              style={{ display: "none" }} // Hide the file input
                            />
                          </label>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ),
    },
  ];
  return (
    <div
      style={{
        marginLeft: "70px",
        background: "#8080800f",
        height: "calc(100vh - 90px)",
        padding: "20px",
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
        <h2 style={{ margin: "0" }}>Manage User</h2>
        {key && key == "1" ? (
          <>
            <button
              type="button"
              style={{
                height: "40px",
                background: "#369FFF",
                border: "0",
                outline: "none",
                color: "white",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={openModal}
            >
              Add Person
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              style={{
                height: "40px",
                background: "#369FFF",
                border: "0",
                outline: "none",
                color: "white",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={openModal}
            >
              Add Blacklist
            </button>
          </>
        )}
      </div>
      <Tabs
        tabPosition="top"
        items={items}
        defaultActiveKey="1"
        onChange={callback}
        style={{ color: "black" }}
      />
      {isOpen && key == "1" ? (
        <div
          className="modal formmodal"
          // style={{ height: "80vh", overflowY: "scroll" }}
        >
          <div className="modal-content formmodal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Add Person</h2>

            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="employeeId">ID:</label>
              <input
                type="text"
                id="employeeId"
                value={formData.code}
                onChange={handleInputChange}
                name="code"
              />
            </div>
            <div>
              <label htmlFor="contact">Contact:</label>
              <input
                type=""
                id="contactNo"
                value={formData.contactNo}
                onChange={handleInputChange}
                name="contactNo"
              />
            </div>

            <div>
              <label htmlFor="language">Person Type:</label>
              <select
                id="personType"
                name="personType"
                value={formData.personType}
                onChange={handleInputChange}
              >
                <option value="">Select person type</option>
                {[...personType].sort().map((person) => (
                  <option value={person}>{person}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="language">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="language">Language:</label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
              >
                <option value="English">Select a language</option>
                {[...languages].sort().map((langs) => (
                  <option value={langs}>{langs}</option>
                ))}
              </select>
            </div>

            <div style={{ justifyContent: "right" }}>
              <button
                // type="submit"
                style={{
                  height: "40px",
                  background: "#369FFF",
                  border: "0",
                  outline: "none",
                  color: "white",
                  padding: "10px",
                  cursor: "pointer",
                  width: "100px",
                }}
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
      {isOpen && key == "2" ? (
        <>
          <div className="modal formmodal">
            <div
              className="modal-content formmodal-content"
              style={{
                overflowY: "scroll",
                padding: "15px",
              }}
            >
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2 style={{ margin: "5px 0", fontSize: "20px" }}>
                Add Blacklist
              </h2>

              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formDataCriminal.name}
                  onChange={handleInputChangeCrime}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formDataCriminal.email}
                  onChange={handleInputChangeCrime}
                />
              </div>
              <div>
                <label htmlFor="criminalId"> Id:</label>
                <input
                  type="text"
                  id="criminalId"
                  name="code"
                  value={formDataCriminal.code}
                  onChange={handleInputChangeCrime}
                />
              </div>
              <div>
                <label htmlFor="contact">Contact:</label>
                <input
                  type=""
                  id="contactNo"
                  value={formDataCriminal.contactNo}
                  onChange={handleInputChangeCrime}
                  name="contactNo"
                />
              </div>

              <div>
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  value={formDataCriminal.gender}
                  onChange={handleInputChangeCrime}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="issuedBy">Issued By:</label>
                <select
                  id="issuedBy"
                  name="issuedBy"
                  value={formDataCriminal.issuedBy}
                  onChange={handleInputChangeCrime}
                >
                  <option value="CBI">Central Bureau of Investigation </option>
                  <option value="MHA">Ministry of Home Affairs</option>
                  <option value="NCRB">National Crime Records Bureau</option>
                  <option value="BSF">Border Security Force</option>
                  <option value="CISF">
                    Central Industrial Security Force
                  </option>
                  <option value="IB">Intelligence Bureau</option>
                </select>
              </div>

              <div>
                <label htmlFor="poc">POC:</label>
                <input
                  type="text"
                  id="poc"
                  value={formDataCriminal.poc}
                  onChange={handleInputChangeCrime}
                  name="poc"
                />
              </div>
              <div>
                <label htmlFor="originCity">Origin City:</label>
                <select
                  id="originCity"
                  name="originCity"
                  value={formDataCriminal.originCity}
                  onChange={handleInputChangeCrime}
                >
                  <option value="">Select a City</option>
                  {[...cities]
                    .map((city) => city.trim())
                    .sort((a, b) => a.localeCompare(b))
                    .map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="employeeId">Reason:</label>
                <input
                  type="text"
                  id="crime"
                  value={formDataCriminal.crime}
                  onChange={handleInputChangeCrime}
                  name="crime"
                />
              </div>
              <div>
                <label htmlFor="language">Language:</label>
                <select
                  id="language"
                  name="language"
                  value={formDataCriminal.language}
                  onChange={handleInputChangeCrime}
                >
                  <option value="English">Select a language</option>
                  {[...languages].sort().map((langs) => (
                    <option value={langs}>{langs}</option>
                  ))}
                </select>
              </div>

              <div style={{ justifyContent: "right" }}>
                <button
                  // type="submit"
                  style={{
                    height: "40px",
                    background: "#369FFF",
                    border: "0",
                    outline: "none",
                    color: "white",
                    padding: "10px",
                    cursor: "pointer",
                    width: "100px",
                  }}
                  onClick={handleSubmitCrime}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {uploading && (
        <div className="modal formmodal">
          <div
            className="modal-content formmodal-content"
            style={{
              overflowY: "scroll",
              padding: "15px",
            }}
          >
            <div>
              Uploading&emsp;
              <div
                style={{
                  width: "100%",
                  background: "#e0e0e0",
                  height: "2px",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    background: "#642863",
                    height: "2px",
                    borderRadius: "20px",
                  }}
                ></div>
                {progress}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDB;
