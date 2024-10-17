import React from "react";

const Live = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginLeft: "70px",
        padding: "20px",
      }}
    >
      <div style={{ flex: "0 0 50%" }}>
        <div>
          <label htmlFor="camera">Select Camera</label>

          <select name="camera" id="camera">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <div>
            <table>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div>
          <div>
            <p>Camera Locatin</p>
            <p>Entrance</p>
          </div>
          <div>
            <p>Camera Locatin</p>
            <p>Entrance</p>
          </div>
        </div>
        <div>
          <p>Live Feed</p>
          <iframe src=""></iframe>
        </div>
      </div>
      <div style={{ flex: "0 0 50%" }}>
        <div>
          <div>
            <label htmlFor="camera">Select Camera</label>

            <select name="camera" id="camera">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
