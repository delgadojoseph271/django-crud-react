import { useEffect, useState } from "react";
import { getAllTask } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";
import style from './css/TasksList.module.css'

export function TasksList() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTask() {
      const res = await getAllTask()
      setTasks(res.data)
    }
    loadTask();
  },[])


  return(
  <div className={style.TasksListContainer}>
    {tasks.map(task =>(
        <TaskCard key={task.id} task={task} />
    ))}
  </div>
  );
}