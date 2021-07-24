import React, { useEffect, useState } from "react"
import { fetchData } from "../../utils/api"
import { sortTasks } from "../../utils/utils"
import { Icon } from "semantic-ui-react"
import { UpdateCheckbox } from "../updateTask"
import { DeleteButton } from "../deleteTask"
import './tasks.scss'
import { CreateForm } from "../createTask";
import { DeleteAllButton } from "../deleteAllTask";

export type taskProps = {
  _id: string
  status: boolean
  task: string
}

export const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState<taskProps[] | void | null>()

  const getTasks = async () => {
    setTasks(sortTasks(await fetchData()))
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <div className="heading">
        <h1>What to do, what to do</h1>
        <DeleteAllButton deleteType="deleteAll" getTasksfn={getTasks}>
          <Icon name="delete" color="red" />
          Delete All
        </DeleteAllButton>
        <DeleteAllButton deleteType="deleteCompleted" getTasksfn={getTasks}>
          <Icon name="delete" color="red" />
          Delete All Completed
        </DeleteAllButton>
      </div>
      <CreateForm getTasksfn={getTasks} />
      {tasks ? tasks.map((task: taskProps, i: number) => {
        return (
          <div key={i} className="task" style={{ backgroundColor: task.status ? '#A1C181' : '#FCCA46' }}>
            <div className="task__title">
              <UpdateCheckbox getTasksfn={getTasks} taskData={task} />
              <h3 style={{textDecoration: task.status ? 'line-through' : ''}}>{task.task}</h3>
            </div>
            <div className="task__meta">
              <DeleteButton getTasksfn={getTasks} taskData={task}>
                <Icon name="delete" color="red" />
                Delete
              </DeleteButton>
            </div>
          </div>
        )
      }) : null}
    </>
  )
}
