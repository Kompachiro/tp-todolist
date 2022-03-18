import React from "react";


export default function Task({titre, message, id, tasks, setTasks}){

    const TasksList = ({ tasks, setTasks}) => {

        const handleDelete = ({id}) => {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    
    }

    return(
        <div className="task" style={{maxWidth:"400px", maxHeight:"200px"}}>
            <div className="task-body">
                <h3 className="task-title">{titre}</h3>
                <p className="task-msg">{message}</p>
                <button type="button" onClick={() => TasksList.handleDelete(tasks.task.id)}>supprimer</button>
            </div>
        </div>
    )

}