import React from "react";

const HistoryText = ({ history }) => {
  return (
    <>
      <div style={{display: 'flex'}}>
        <p>
          Operation: {history.input.a} {history.operation} {history.input.b}
        </p>
        <p style={{marginLeft: "14PX"}}>Result = {history.result}</p>
      </div>
      <p>
        {history.date.toLocaleDateString()} 🤡{" "}
        {history.date.toLocaleTimeString()}
      </p>
    </>
  );
};

export default HistoryText;
