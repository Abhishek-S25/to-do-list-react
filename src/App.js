import React, { useState } from 'react';
import Todolist from './components/Todolist';
import './App.css';

const App = () => {
  const [inputState, setInputState] = useState('');
  const [Items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputState(event.target.value);
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputState];
    });
    setInputState('');
  }
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>To-Do List</h1>
          <br></br>
          <div className='input-container'>
            <input className='input' type='text' placeholder='Add Items' onChange={itemEvents} value={inputState} />
            <button onClick={listOfItems}>+</button>
          </div>
          <ol>
            {Items.map((itemsVal, index) => {
              return <Todolist id={index} key={index} text={itemsVal} onSelect={deleteItems} />
            })
            }
          </ol>
        </div>
      </div>
    </>
  )
};
export default App;