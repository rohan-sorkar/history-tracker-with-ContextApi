import HistoryItem from "./HistoryItem";

const History = ({histories}) => {
  return (
    <div>
      {
        histories.map((history) => (<HistoryItem key={history.id} history={history} />))
      }
    </div>
  );
};

export default History;
