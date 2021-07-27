import React from "react"
import { deleteAllTask, deleteTask, fetchData, deleteCompleted } from "../../utils/api"
import { taskProps} from "../tasks"
import "./delete.scss"

export type deleteAllProps = {
	getTasksfn: () => taskProps | Promise<void>
	deleteType: "deleteAll" | "deleteCompleted" | "deleteOne"
	children: React.ReactNode
}

export const DeleteAllButton: React.FC<deleteAllProps> = ({ deleteType, getTasksfn, children }) => {


  const deleteAll = async () => {
		await deleteAllTask().then(() => {getTasksfn()})
  }

	const deleteCompletedTasks = async () => {
		let tasks = await fetchData()
		let taskArr: string[] = []
		
		if (tasks) {
			tasks.forEach((task: taskProps) => {
				if (task.status === true) {
					taskArr.push(task._id)
				}
			})
			await deleteCompleted(taskArr).then(() => {getTasksfn()})
		}

	}

  return (
		<button className={deleteType} onClick={() => {
			switch(deleteType) {
				case 'deleteAll':
					deleteAll()
					break
				case 'deleteCompleted':
					deleteCompletedTasks()	
					break
			}}}>
			{children}
		</button>
  )
}
