import { TasksList } from "../components/TasksList"

export function TaskListDone() {
  return (
    <TasksList filterCompleted={true}/>
  )
}
