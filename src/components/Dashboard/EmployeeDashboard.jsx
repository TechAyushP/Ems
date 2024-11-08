import TaskList from "../../TaskList/TaskList"
import Alltask from "../others/Alltask"
import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"

const EmployeeDashboard = () => {
  return (
    <div className="py-5 px-5 pt-10">
   <Header/>
   <TaskListNumber/>
    <TaskList/> 

    </div>
  )
}

export default EmployeeDashboard
