import React from "react"
import { deleteAllTask, deleteTask } from "../../utils/api"
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

	const deleteCompleted = async () => {
		// await 
	}

  return (
		<button className={deleteType} onClick={() => {
			switch(deleteType) {
				case 'deleteAll':
					deleteAll()
				case 'deleteCompleted':
					deleteCompleted()	
			}}}>
			{children}
		</button>
  )
}
