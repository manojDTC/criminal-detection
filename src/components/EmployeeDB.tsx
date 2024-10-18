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
      label: "Employee List",
      children: (
        <div className="text-xl">
          <p>Employee List will be displayed here</p>
        </div>
      ),
    },
    {
      key: "3",
      label: <p style={{ marginLeft: "10px" }}>Criminal List</p>,
      children: <div>Criminal list will be shown here</div>,
    },
  ];
  return (
    <div style={{ marginLeft: "100px" }}>
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
