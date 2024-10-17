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
      label: "Google",
      children: (
        <div className="text-xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
      ),
    },
    {
      key: "3",
      label: <p>Twitter</p>,
      children: (
        <div>
          "There is no one who loves pain itself, who seeks after it and wants
          to have it, simply because it is pain..."
        </div>
      ),
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
