import { useContext } from "react";
import { operationContext } from "../../context/operationContext";

const ClearBtn = () => {
  const { clearHandler } = useContext(operationContext);

  return (
    <>
      <button onClick={clearHandler} className="clear_btn">
        clear
      </button>
    </>
  );
};

export default ClearBtn;
