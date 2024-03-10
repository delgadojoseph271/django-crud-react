import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'

import styles from './css/TaskFormPage.module.css'

export function TasksFormPage() {
    const {
      register, 
      handleSubmit, 
      formState:{errors},
      setValue
    } = useForm()
    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async (data) => { 
      if (params.id){
        console.log('actualizando')
        await updateTask(params.id, data)
      } else{
        await createTask(data)
      }

      navigate('/tasks')

    })

    useEffect(() => {
      async function loadTask() {
        if (params.id) {
          const res = await getTask(params.id)
          setValue('title', res.data.title)
          setValue('description', res.data.description)
        }
      }
      loadTask()
    }, [])

    return (
      <div>
        <form onSubmit={onSubmit} className={styles.form}>
          <input 
          className={styles.title}
            type="text"
            placeholder="title" 
            {...register('title', { required:true })}
          />

          {errors.title && <span>This field is required</span>}

          <textarea 
            placeholder="Description"
            {...register('description', { required:true })}
            className={styles.description}
          ></textarea>
            {errors.description && <span>This field is required</span>}
            
            <div className={styles.buttonBox}>
              <button className={styles.saveButton}>Save</button>

              {params.id && 
                <button className={styles.deleteButton}
                  onClick={async() => {
                    const accepted = window.confirm('are you sure?')
                    if (accepted){
                      await deleteTask(params.id)
                    }
              }}>Delete</button>}
          </div>
        </form>
      </div>
    )
  }
