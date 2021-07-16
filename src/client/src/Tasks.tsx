import React, { useState } from "react"
import axios from "axios"
import { Card, Header, Form, Input, Icon } from "semantic-ui-react"

export type ToDoListProps = {
  tasks: any
}

let endpoint = "http://localhost:8080"

export const Tasks: React.FC<ToDoListProps> = ({


}) => {

  const [tasks, setTasks] = useState()

  
  const getTask = () => {
    axios.get(endpoint + "/api/task").then((res) => {
      console.log(res.data)
      setTasks(res.data)
    })
  }
  getTask()
  
  console.log(tasks)
  
  return (
    <>
      {/* {tasks.map((item: any) => {
        let color = "yellow"

        if (item.status) {
          color = "green"
        }

        return (
          <Card key={item._id} style={{background: color}} fluid>
            <Card.Content>
              <Card.Header textAlign="left">
                <div>{item.task}</div>
              </Card.Header>

              <Card.Meta textAlign="right">
                <Icon
                  name="check circle"
                  color="green"
                  onClick={() => this.updateTask(item._id)}
                />
                <span style={{ paddingRight: 10 }}>Done</span>
                <Icon
                  name="undo"
                  color="yellow"
                  onClick={() => this.undoTask(item._id)}
                />
                <span style={{ paddingRight: 10 }}>Undo</span>
                <Icon
                  name="delete"
                  color="red"
                  onClick={() => this.deleteTask(item._id)}
                />
                <span style={{ paddingRight: 10 }}>Delete</span>
              </Card.Meta>
            </Card.Content>
          </Card> 
        )
      })} */}
    </>
  )
}
