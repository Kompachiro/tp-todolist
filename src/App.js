import './App.css';
import Form from './Form.js';
import Task from './Task.js';
import Count from './Count';
import React from 'react';

function App() {

  const [tasks,setTasks] = React.useState([]);

  return (
    <div className="task-container" style={{maxWidth:"400px", maxHeight:"200px", display:""}}>
      <Form setTasks={setTasks}/>
      {tasks.map((task)=> (
        <Task titre={task.titre} message={task.message} key={task.id}/>
      ))}
    </div>
  );
}

export default App;
