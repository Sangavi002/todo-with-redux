
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './App.css'

function App() {
  const [inputData, setInputData] = useState('');
  const data = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const handleData = (e) => {
    setInputData(e.target.value);
  }

  const handleSumbit = () => {
    const newTodo = { id: data.length + 1, title: inputData, isCompleted: false };
    dispatch({ type: "ADD", payload: newTodo });
    setInputData('');
  }

  const handleUpdate = (id) => {
    dispatch({ type: "UPDATE", payload: id });
  }

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  }

  return (
    <>
      <div className="container">
      <h1>Todo List</h1>
      <input type="text" placeholder='Add new task' value={inputData} onChange={handleData} style={{padding: '7px 15px'}}/><br />
      <button className='submit-btn' onClick={handleSumbit}>Submit</button><br />
      <table>
        <thead>
          <tr>
            <th>TodoList</th>
            <th>Mark as completed</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>
                <button className='update-btn' onClick={() => handleUpdate(todo.id)}
                style={{background: todo.isCompleted ? 'green' : 'tomato'}}>
                  {todo.isCompleted ? "Completed" : "Not Completed"}
                </button>
              </td>
              <td>
                <button className='remove-btn' onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default App;
