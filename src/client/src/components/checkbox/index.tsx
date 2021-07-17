import React from "react"
import { toggleTaskStatus } from "../../utils"
import "./checkbox.scss"

export type checkboxProps = {
}

export const Checkbox: React.FC = () => {

  return (
		<input 
			className="checkbox" 
			type="checkbox" 
			// onClick={() => toggleTaskStatus(null)} 
		/>
  )
}
