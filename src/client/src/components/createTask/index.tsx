import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";
import { taskProps } from "../tasks"
import { createTask } from "../../utils/api"
import { useForm } from "../../hooks/useForm";

export type createProps = {
	getTasksfn: () => taskProps | Promise<void>
}

export const CreateForm: React.FC<createProps> = ({ getTasksfn }) => {

	const initialState = {}

	const { onChange, onSubmit, values } = useForm(
		userCallback,
		initialState
	)

	async function userCallback() {
		createTask(values).then(() => {
			getTasksfn()
		})
	}

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
		</Form>
  )
}
