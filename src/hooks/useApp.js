import { useState } from "react";
import {v4 as uuid4} from 'uuid';

const initialState = {
    a: 0,
    b: 0
  }

export const useApp = () => {
    const [inputState, setInputState] = useState({...initialState});
    const [result, setResult] = useState(0);
    const [histories, setHistory] = useState([]);
    const [restoredHistory, setRestoredHistory] = useState(null);
    const [activeButton, setActiveButton] = useState(null)
  
    //onchange handler function
    const onChangeHandler = (e) => {
      setInputState({
        ...inputState,
        [e.target.name]: e.target.value
      })
    }
  
    // result generator as well as history creator function
    const arithMeticHandler = (operation) => {
      if(!inputState.a || !inputState.b) {
        alert('please fill up the input field🙄')
        return;
      }
      const f = new Function(
        'operation', 
        `return ${inputState.a} ${operation} ${inputState.b}`
      )
      const result = f(operation);
      setResult(result)
  
      //history object
      const history = {
        id: uuid4(),
        input: {
          ...inputState
        },
        date: new Date(),
        operation,
        result
      }
      setHistory([history, ...histories])
      setActiveButton(operation)
    }
  
    //clearHandler function to make our state and result value into initial value
    const clearHandler = () => {
      setInputState({...initialState})
      setResult(0)
      setRestoredHistory(null)
      setActiveButton(null)
    }
    
    // handler that restore the history
    const restoredHandler = (history) => {
      setInputState({...history.input})
      setResult(history.result)
      setRestoredHistory(history.id)
      setActiveButton(history.operation)
    }

    return {
        inputState, 
        result, 
        histories,
        restoredHistory,
        activeButton,
        onChangeHandler,
        arithMeticHandler,
        clearHandler,
        restoredHandler
    }
}