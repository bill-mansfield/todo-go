import { taskProps } from"../components/tasks"

export const sortTasks = (tasks: taskProps[]):taskProps[] | null => {
	if (tasks != null) {
		let tasksArr: taskProps[] = []

		tasks.forEach((task: taskProps) => {
			task.status === true ?
			tasksArr.push(task) :
			tasksArr.unshift(task)
		})

		return tasksArr
	}
	
	return null
}