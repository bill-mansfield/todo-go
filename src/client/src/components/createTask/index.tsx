import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";
import { taskProps } from "../tasks"
import { createTask } from "../../utils"
import { useForm } from "../../hooks/useForm";

export type createProps = {
	getTasksfn: () => taskProps | Promise<void>
}

export const CreateForm: React.FC<createProps> = ({ getTasksfn }) => {

	const initialState = {}

	// getting the event handlers from our custom hook
	const { onChange, onSubmit, values } = useForm(
		userCallback,
		initialState
	)

	// a submit function that will execute upon form submission
	async function userCallback() {
		// send "values" to database
		createTask(values).then(() => {getTasksfn()})
	}
	console.log(values)

  return (
		<Form  
			onSubmit={onSubmit}
		>
			<Input
				type="text"
				name="task"
				id="task"
				onChange={onChange}
				fluid
				placeholder="Create Task"
				required
			/>
			<button type='submit'>Create Task</button>
		</Form>
  )
}
