import {useContext} from "react";
import { historyContext } from "../../context/historyContext";

const RestoreBtn = ({history}) => {
  const {restoredHistory, restoredHandler} = useContext(historyContext)
  
  return (
    <>
      <button className="restore_btn" onClick={() => restoredHandler(history)} disabled={history.id === restoredHistory}>Restore</button>
    </>
  );
};

export default RestoreBtn;
