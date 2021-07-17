import axios from "axios"
import { taskProps } from "../components/tasks"

export const fetchData = async () => {
	axios.get(process.env.REACT_APP_ENDPOINT + "/api/task").then((res) => {
		console.log(res.data)
		return(res.data)
	})
}

export const toggleTaskStatus = (task: taskProps): void => {
	if (task.status === false) {
		updateTask(task)
	} else {
		undoTask(task)
	}
}

export const updateTask = (task: taskProps): void => {
	axios.put(process.env.REACT_APP_ENDPOINT + "/api/task/" + task._id, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	})
	.then((res) => {
		console.log(res.data)
		fetchData()
	});
}

export const undoTask = (task: taskProps): void => {
	axios
		.put(process.env.REACT_APP_ENDPOINT + "/api/undoTask/" + task._id, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		})
		.then((res) => {
			console.log(res);
			fetchData()
		});
};
