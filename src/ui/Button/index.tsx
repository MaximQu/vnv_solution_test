import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type ButtonProps = {
	children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
	return (
		<button
			{...props}
			className={twMerge(
				"mx-auto block w-full cursor-pointer bg-white px-4 py-2 text-2xl font-medium uppercase tracking-widest text-primary duration-200 hover:shadow-[0.5rem_0.5rem_#211F28,-0.5rem_-0.5rem_#00BCD4] active:translate-x-0.5 active:translate-y-0.5 md:max-w-[15.625rem]",
				className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
