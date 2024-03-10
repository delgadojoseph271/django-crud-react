import { useEffect, useState } from "react";
import { getAllTask } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";
import style from './css/TasksList.module.css';

export function TasksList({ filterCompleted }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTask() {
        const res = await getAllTask();
        setTasks(res.data);
    }
      loadTask();
  }, []);

  const filteredTasks = filterCompleted ? tasks.filter(task => task.done) : tasks.filter(task => !task.done);
  console.log(filteredTasks);

  return (
    <div className={style.TasksListContainer}>
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
