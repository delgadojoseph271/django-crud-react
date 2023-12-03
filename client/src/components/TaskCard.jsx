import { useNavigate } from "react-router-dom";
import style from './css/taskCard.module.css'

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
      className={style.taskCard}
    >
      <h1>
        {task.title}
      </h1>
      <p>{task.description}</p>
    </div>
  );
}