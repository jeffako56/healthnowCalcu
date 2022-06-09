import React from "react";

export function CalcView({ handleChange, view }) {
  return (
    <div
      className="calcView"
      value={view}
      handleChange={handleChange}
      style={{
        height: "8vh",
        margin: "0 auto",
        width: "95%",
        backgroundColor: "black",
        display: "flex",
        color: "white",

        textAlign: "right",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "20px",
        fontSize: "50px",
      }}
    >
      {view}
    </div>
  );
}
