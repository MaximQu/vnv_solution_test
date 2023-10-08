import React, { FC, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
	children: React.ReactNode;
} & HTMLProps<HTMLHeadingElement>;

const Title: FC<TitleProps> = ({ children, className, ...props }) => {
	return (
		<h2 className={twMerge("mb-4 text-4xl", className)}  {...props}>
			{children}
		</h2>
	);
};

export default Title;
