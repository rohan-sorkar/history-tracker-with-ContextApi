import React from 'react'
import HistoryText from '../ui/historyText';
import RestoreBtn from '../ui/restoreBtn';

const HistoryItem = ({history}) => {
  return (
    <div className='history'>
      <HistoryText history={history}/>
      <RestoreBtn history={history}/> 
    </div>
  )
}

export default HistoryItem;