import React, { useEffect, useState } from "react"
import { fetchData } from "../../utils"
import { Icon } from "semantic-ui-react"
import { UpdateCheckbox } from "../updateTask"
import { DeleteButton } from "../deleteTask"
import './tasks.scss'

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
      {tasks ? tasks.map((task: taskProps, i: number) => {
        return (
          <div key={i} className="task" style={{ backgroundColor: task.status ? 'green' : 'yellow' }}>
					{console.log(task.status)}
            <div className="task__title">
              <UpdateCheckbox getTasksfn={getTasks} taskData={task} />
              <h3>{task.task}</h3>
            </div>
            <div className="task__meta">
              <span style={{ paddingRight: 10 }}>Done</span>
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
