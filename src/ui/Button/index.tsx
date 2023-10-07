import React, { FC, ReactNode } from "react";
type ButtonProps = {
	children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children }) => {
	return (
		<button
			type="button"
			className="text-primary w-full text-2xl cursor-pointer tracking-widest font-bold bg-white px-4 py-2 uppercase transition hover:shadow-[0.5rem_0.5rem_#211F28,-0.5rem_-0.5rem_#00BCD4] active:translate-x-0.5 active:translate-y-0.5"
		>
			{children}
		</button>
	);
};

export default Button;
