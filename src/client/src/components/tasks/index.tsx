import React, { useEffect, useState } from "react"
import { fetchData } from "../../utils"
import { Icon } from "semantic-ui-react"
import { UpdateCheckbox } from "../updateTask"
import { DeleteButton } from "../deleteTask"
import './tasks.scss'
import { CreateForm } from "../createTask";

export type taskProps = {
  _id: string
  status: boolean
  task: string
}

export const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState<taskProps[] | void>()

  const getTasks = async () => {
    setTasks(await fetchData())
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <h1>What to do, what to do</h1>
      <CreateForm getTasksfn={getTasks} />
      {tasks ? tasks.map((task: taskProps, i: number) => {
        return (
          <div key={i} className="task" style={{ backgroundColor: task.status ? 'green' : 'yellow' }}>
					{console.log(task.status)}
            <div className="task__title">
              <UpdateCheckbox getTasksfn={getTasks} taskData={task} />
              <h3>{task.task}</h3>
            </div>
            <div className="task__meta">
              <DeleteButton getTasksfn={getTasks} taskData={task}>
                <Icon
                  name="delete"
                  color="red"
                />
                Delete
              </DeleteButton>
            </div>
          </div>
        )
      }) : null}
    </>
  )
}
