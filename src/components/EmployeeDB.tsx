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
  const employeeList: Employee[] = [];

  const criminalList: Criminal[] = [];

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
          `${process.env.REACT_APP_BASE_URL}/api/Person/GetCriminalsImagesAsync`
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
                        <td>
                          <span>
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}${firstImageUrl}`}
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
                        <td>
                          <span>
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}${firstImageUrl}`}
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
    </div>
  );
};

export default EmployeeDB;
