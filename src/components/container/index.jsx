import History from "../history";
import Operation from "../operation";
import HistoryHeading from "../ui/historyHeading";
import ResultHeading from "../ui/resultHeading";
import { useApp } from "../../hooks/useApp";
import { operationContext } from "../../context/operationContext";
import { historyContext } from "../../context/historyContext";

const HistoryContainer = () => {
  const {
    inputState,
    result,
    histories,
    restoredHistory,
    activeButton,
    onChangeHandler,
    arithMeticHandler,
    clearHandler,
    restoredHandler,
  } = useApp();

  return (
    <div className="history_container">
      <ResultHeading result={result} />

      <operationContext.Provider
        value={{
          inputState,
          activeButton,
          onChangeHandler,
          arithMeticHandler,
          clearHandler,
        }}
      >
        <Operation />
      </operationContext.Provider>

      <HistoryHeading totalHistory={histories.length} />

      <historyContext.Provider value={{restoredHistory, restoredHandler}}>
        <History
          histories={histories}
        />
      </historyContext.Provider>
    </div>
  );
};

export default HistoryContainer;
