import React, { useEffect, useState } from "react"
import { fetchData } from "../../utils"
import { Icon } from "semantic-ui-react"
import { Checkbox } from "../checkbox"
import './tasks.scss'

export type taskProps = {
  _id: string
  status: boolean
  task: string
}

export const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState<taskProps[]>();

  // moved fetchData into utils dir
  // current issue is that we used to assign the response right into the state
  // Now trying to return the response. but you cant because asyc
  useEffect(() => {
    setTasks(await fetchData())
  }, [])

  console.log(tasks)

  return (
    <>
      {tasks ? tasks.map((task: taskProps, i: number) => {
        return (
          <div key={i} className="task" style={{ backgroundColor: task.status ? 'green' : 'yellow' }}>
            <div className="task__title">
              <Checkbox />
              <h3>{task.task}</h3>
            </div>
            <div className="task__meta">
              <span style={{ paddingRight: 10 }}>Done</span>
              <Icon
                name="delete"
                color="red"
                // onClick={() => this.deleteTask(task._id)}
              />
              <span style={{ paddingRight: 10 }}>Delete</span>
            </div>
          </div>
        )
      }) : null}
    </>
  )
}
