import { useContext } from "react";
import { operationContext } from "../../context/operationContext";

const InputField = ({ type, name, value }) => {
  const { onChangeHandler } = useContext(operationContext);

  return (
    <>
      <input type={type} name={name} value={value} onChange={onChangeHandler} />
      <br />
    </>
  );
};

export default InputField;
