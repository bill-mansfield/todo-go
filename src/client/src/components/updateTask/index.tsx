import React from "react"
import { updateTask, undoTask} from "../../utils/api"
import { taskProps} from "../tasks"
import "./updateTask.scss"

export type checkboxProps = {
	taskData: taskProps
	getTasksfn: () => taskProps | Promise<void>
}

export const UpdateCheckbox: React.FC<checkboxProps> = ({ taskData, getTasksfn }) => {

  const toggleTaskStatus = async (task: taskProps) => {
    if (task.status === false) {
    	await updateTask(task).then(() => {getTasksfn()})
    } else {
    	await undoTask(task).then(() => {getTasksfn()})
    }
  }

  return (
		<input
			className="checkbox" 
			type="checkbox"
			checked={taskData.status}
			onChange={() => {toggleTaskStatus(taskData)}}
		/>
  )
}
