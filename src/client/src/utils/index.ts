import axios from "axios"
import { taskProps } from "../components/tasks"

export const fetchData = async () => {
	try { 
		const response = await axios.get(process.env.REACT_APP_ENDPOINT + "/api/task")
		return response.data
	}
	catch (err) {
		console.error("Error: fetchData()")
	}
}

export const updateTask = async (task: taskProps) => {
	try {
		const response = await axios.put(process.env.REACT_APP_ENDPOINT + "/api/task/" + task._id, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		})
		return response.data
	} catch (err) {
		console.error("Error: updateTask()")
	}
	
}

export const undoTask = async (task: taskProps) => {
	try { 
		const response = await axios.put(process.env.REACT_APP_ENDPOINT + "/api/undoTask/" + task._id, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		})
		return response.data
	}
	catch (err) {
		console.error("Error: undoTask()")
	}
};

export const deleteTask = async (task: taskProps) => {
	try { 
		const response = await axios.put(process.env.REACT_APP_ENDPOINT + "/api/deleteTask/" + task._id, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			}
		})
		return response.data
	}
	catch (err) {
		console.error("Error: deleteTask()")
	}
}

export const createTask = async (task: any) => {
	try { 
		const response = await axios.post(process.env.REACT_APP_ENDPOINT + "/api/task", task, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			}
		})
		return response.data
	}
	catch (err) {
		console.error("Error: createTask()")
	}
}
