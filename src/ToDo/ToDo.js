import { useState } from "react";
import ToDoChild from "../ToDo/ToDoChild"


export default function ToDo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  function AddTask() {
    setTaskList([...taskList, { task: task }]);
    setTask("");
  }
  return (
    <div className="App">
      <h1> Todo App</h1>
      <h2>Using React Js</h2>
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={AddTask}>Add</button>
      {/* for showing the information  */}
      {taskList.map((task) => {        
        return <ToDoChild task={task.task} />;        
      })}
    </div>
  );
}
