import React from "react";
import Tabs from "rc-tabs";
import "rc-tabs/assets/index.css";

const EmployeeDB = () => {
  const callback = (key: number) => {
    console.log(key);
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
              </tr>{" "}
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
              </tr>{" "}
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
    {
      key: "3",
      label: (
        <p style={{ marginLeft: "10px", fontSize: "16px" }}>Criminal List</p>
      ),
      children: (
        <div>
          {" "}
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
              </tr>{" "}
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
              </tr>{" "}
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
        //onChange={callback}
        style={{ color: "black" }}
      />
    </div>
  );
};

export default EmployeeDB;
