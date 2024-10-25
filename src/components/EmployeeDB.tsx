import React, { useEffect, useState } from "react";
import Tabs from "rc-tabs";
import "rc-tabs/assets/index.css";
import axios from "axios";
import { toast } from "react-toastify";

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

const EmployeeDB = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [criminals, setCriminal] = useState<Criminal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState<string | null>("1");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get<Employee[]>(
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetEmployeesImages`
        );
        setEmployees(response.data);
      } catch (error) {
        toast.error("Failed to load employees");
        setError("Failed to load employees");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();

    const fetchCriminals = async () => {
      try {
        const response = await axios.get<Criminal[]>(
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetCriminalsImages`
        );
        setCriminal(response.data);
      } catch (error) {
        toast.error("Failed to load criminals");
        setError("Failed to load criminals");
      } finally {
        setLoading(false);
      }
    };

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

  const items = [
    {
      key: "1",
      label: <p style={{ fontSize: "16px" }}>Employee List</p>,
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
                    <th>Employee Id</th>
                    <th>Role</th>
                    <th>Camera Name</th>
                    <th>Total Images</th>
                  </tr>
                  {employees.map((employee) => {
                    const totalImages = employee.images.length;
                    const firstImageUrl =
                      employee.images.length > 0
                        ? employee.images[0].imageUrl
                        : "No Image";
                    return (
                      <tr key={employee.id}>
                        <td
                          style={{
                            display: "flex",
                            justifyContent: "left",
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
                                objectFit: "contain",
                              }}
                              src={`${process.env.REACT_APP_BASE_URL}/${firstImageUrl}`}
                              alt=""
                            ></img>
                          </span>
                          {employee.name}
                        </td>
                        <td>{employee.gender}</td>
                        <td>{employee.code}</td>
                        <td>{employee.role}</td>
                        <td>{employee.cameraName}</td>
                        <td>{totalImages}</td>
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
      label: (
        <p style={{ marginLeft: "10px", fontSize: "16px" }}>Criminal List</p>
      ),
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
                  </tr>
                  {criminals.map((criminal) => {
                    const totalImages = criminal.images.length;
                    const firstImageUrl =
                      criminal.images.length > 0
                        ? criminal.images[0].imageUrl
                        : "No Image";
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
                              style={{ height: "40px", borderRadius: "50%" }}
                              src={`${process.env.REACT_APP_BASE_URL}/${firstImageUrl}`}
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
        // overflow: "scroll",
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
          Add Employee
        </button>
      </div>
      <Tabs
        tabPosition="top"
        items={items}
        defaultActiveKey="1"
        //className="md:w-[70%] w-full mx-auto p-2 border-0"
        onChange={callback}
        style={{ color: "black" }}
      />
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Add Employee</h2>
            <form>
              <div>
                <label htmlFor="name">UserName</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="role">Role:</label>
                <input type="text" id="role" name="role" required />
              </div>
              <div>
                <label htmlFor="employeeId">Employee ID:</label>
                <input type="text" id="employeeId" name="employeeId" required />
              </div>
              <div>
                <label htmlFor="contact">Contact:</label>
                <input type="" id="contact" name="contact" required />
              </div>
              <div>
                <label htmlFor="language">Language:</label>
                <select id="language" name="language">
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                </select>
              </div>
              <div>
                <label htmlFor="country">Country:</label>
                <select id="country" name="country">
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="australia">Australia</option>
                  <option value="india">India</option>
                </select>
              </div>
              <div>
                <label htmlFor="photo">Photo:</label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept=".png , .jpg , jpeg"
                  multiple
                />
              </div>
              <div style={{ justifyContent: "right" }}>
                <button
                  type="submit"
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
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDB;
