import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateTask } from '../api/tasks.api';
import style from './css/taskCard.module.css';

export function TaskCard({ task }) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(task.done);

  const handleCheckboxChange = async () => {
    try {
      const updatedTask = {
        title: task.title,  
        done: event.target.checked,
      };      
      await updateTask(task.id, updatedTask);
      setIsChecked(!isChecked);
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      if (error.response) {
        console.error('Respuesta del servidor:', error.response.data);
      }
    }
  };

  return (
    <div className={style.taskCard}>
      <div
        onClick={() => {
          navigate(`/tasks/${task.id}`);
        }}
      >
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      </div>
      <div className={style.button}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}