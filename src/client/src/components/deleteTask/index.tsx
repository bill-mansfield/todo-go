import React from "react"
import { deleteTask } from "../../utils/api"
import { taskProps} from "../tasks"

export type deleteProps = {
	taskData: taskProps
	getTasksfn: () => taskProps | Promise<void>
	children: React.ReactNode
}

export const DeleteButton: React.FC<deleteProps> = ({ taskData, getTasksfn, children }) => {

  const deleteItem = async (task: taskProps) => {
		await deleteTask(task).then(() => {getTasksfn()})
  }

  return (
		<button onClick={() => {deleteItem(taskData)}}>
			{children}
		</button>
  )
}
