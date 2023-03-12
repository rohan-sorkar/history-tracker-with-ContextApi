import InputField from "../shared/InputField";
import OperationBtn from "../shared/OperationBtn";
import ClearBtn from "../ui/clearBtn";
import { useContext } from "react";
import { operationContext } from "../../context/operationContext";

const Operation = () => {
  const { inputState } = useContext(operationContext);

  return (
    <div>
      <InputField type={"number"} name={"a"} value={inputState.a} />
      <InputField type={"number"} name={"b"} value={inputState.b} />

      <div className="btn_group">
        <OperationBtn operation={"+"} />
        <OperationBtn operation={"-"} />
        <OperationBtn operation={"*"} />
        <OperationBtn operation={"/"} />

        <ClearBtn />
      </div>
    </div>
  );
};

export default Operation;
