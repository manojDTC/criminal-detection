import React, { useEffect, useState } from "react";
import Tabs from "rc-tabs";
import "rc-tabs/assets/index.css";
import axios from "axios";

interface Employee {
  employeeId: number;
  employeeName: string;
  gender: string;
  role: string;
  cameraName: string;
  totalImages: number;
  imageUrl: string;
}

const EmployeeDB = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState<string | null>("1");
  const employeeList: Employee[] = [
    {
      employeeName: "Sukanya Devi",
      gender: "Female",
      employeeId: 4434,
      role: "Employee",
      cameraName: "test1",
      totalImages: 840,
      imageUrl: "",
    },
    {
      employeeName: "Sukanya Devi",
      gender: "Female",
      employeeId: 444,
      role: "Employee",
      cameraName: "test1",
      totalImages: 840,
      imageUrl: "",
    },
  ];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        // const response = await axios.get<Employee[]>(
        //   "https://api.example.com/employees"
        // );
        const response = employeeList;
        //setEmployees(response.data);
        setEmployees(response);
      } catch (error) {
        setError("Failed to load employees");
      } finally {
        setLoading(false);
      }
    };

    if (key === "1") {
      fetchEmployees();
    }
  }, [key]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const callback = (key: string) => {
    setKey(key);
  };

  const items = [
    {
      key: "1",
      label: <p style={{ fontSize: "16px" }}>Employee List</p>,
      children: (
        <div className="text-xl">
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
              {employees.map((employee) => (
                <tr key={employee.employeeId}>
                  <td>
                    <span>
                      <img src={employee.imageUrl} alt=""></img>
                    </span>
                    {employee.employeeName}
                  </td>
                  <td>{employee.gender}</td>
                  <td>{employee.employeeId}</td>
                  <td>{employee.role}</td>
                  <td>{employee.cameraName}</td>
                  <td>{employee.totalImages}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <tr>
                <td>
                  <span>
                    <img src="" alt=""></img>
                  </span>
                  Name
                </td>
                <td>M</td>
                <td>E-101</td>
                <td>Manager</td>
                <td>Camera1</td>
                <td>20</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <img src="" alt=""></img>
                  </span>
                  Name
                </td>
                <td>M</td>
                <td>E-101</td>
                <td>Manager</td>
                <td>Camera1</td>
                <td>20</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <img src="" alt=""></img>
                  </span>
                  Name
                </td>
                <td>M</td>
                <td>E-101</td>
                <td>Manager</td>
                <td>Camera1</td>
                <td>20</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <img src="" alt=""></img>
                  </span>
                  Name
                </td>
                <td>M</td>
                <td>E-101</td>
                <td>Manager</td>
                <td>Camera1</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
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
