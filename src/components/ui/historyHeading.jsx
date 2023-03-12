import React from "react";

const HistoryHeading = ({totalHistory}) => {
  return (
    <>
      <h2 className="history_heading">History</h2>
      {totalHistory === 0 && <h4>There is no History yet🤨</h4>}
    </>
  );
};

export default HistoryHeading;
