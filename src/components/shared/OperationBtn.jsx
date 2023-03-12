import { useContext } from "react";
import { operationContext } from "../../context/operationContext";

const OperationBtn = ({ operation }) => {
  const { arithMeticHandler, activeButton } = useContext(operationContext);

  const activeBtn =
    activeButton === operation
      ? { backgroundColor: "#414a4c", color: "white" }
      : {};
  return (
    <>
      <button onClick={() => arithMeticHandler(operation)} style={activeBtn}>
        {operation}
      </button>
    </>
  );
};

export default OperationBtn;
