import React, { FC } from "react";

type InputType = React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputType> = ({ ...props }) => {
	return (
		<input
			className="w-full border border-transparent bg-blue/70 p-1 text-2xl outline-none focus:border-blue"
			type="text"
			name=""
			required
			{...props}
		/>
	);
};

export default Input;
