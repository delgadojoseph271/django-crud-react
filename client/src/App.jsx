import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import { TasksPage } from './pages/TasksPage'
import { TasksFormPage } from './pages/TaskFormPage'
import { Navigation } from './components/Navigation'
import { TaskListDone } from './pages/TaskListDone'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to='/tasks'/>} />
        <Route path='/tasks' element={<TasksPage/>} />
        <Route path='/tasks-create' element={<TasksFormPage/>} />
        <Route path='/tasks/:id' element={<TasksFormPage/>} />  
        <Route path='/tasks-done' element={<TaskListDone/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App