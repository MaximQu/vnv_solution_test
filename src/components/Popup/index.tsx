import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Input from "../ContactUs/components/Input";

const Popup = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="fixed bottom-10 right-5 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue">
			<span
				className={twMerge(
					"absolute cursor-pointer text-3xl text-white duration-200 hover:-rotate-45",
					visible && "static",
				)}
				onClick={() => setVisible((prev) => !prev)}
			>
				{!visible ? (
					<>%</>
				) : (
					<>
						<svg
							height="40"
							viewBox="0 0 21 21"
							width="40"
							xmlns="http://www.w3.org/2000/svg"
                            className="rotate-45"
						>
							<g
								fill="none"
								fillRule="evenodd"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								transform="translate(5 5)"
							>
								<path d="m10.5 10.5-10-10z" />
								<path d="m10.5.5-10 10" />
							</g>
						</svg>
					</>
				)}
			</span>
			<div
				className={twMerge(
					"absolute w-72 translate-x-full rounded-xl bg-blue/80 p-4 text-xl backdrop-blur-sm duration-300",
					visible && "-translate-x-40",
				)}
			>
				<span className="mb-3 block">First consultation for free!</span>
				<Input
					className="w-full rounded-md p-1 border-transparent bg-white text-2xl text-primary  placeholder:font-normal"
					type="email"
					name="userEmail"
					placeholder="Email"
				/>
			</div>
		</div>
	);
};

export default Popup;
