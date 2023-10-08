import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Input from "../ContactUs/components/Input";
import Button from "../../ui/Button";

const Popup = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			className={twMerge(
				"fixed bottom-10 right-5 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue",
				visible &&
					"bottom-10 right-0 h-auto w-full max-w-sm items-start rounded-xl p-4",
			)}
		>
			<div
				className={twMerge(
					"translate-x-full cursor-none  text-xl opacity-0 duration-300",
					visible && "translate-x-0 opacity-100",
				)}
			>
				<span className="mb-5 block">First consultation for free!</span>
				<form className="flex gap-2" action="/" method="post" autoComplete="true">
					<Input
						className="w-full border-transparent bg-white p-1 text-2xl text-primary outline-none placeholder:text-xl placeholder:font-normal"
						type="email"
						name="userEmail"
						placeholder="Email"
					/>
					<Button className="w-fit max-w-fit font-normal text-lg">Send</Button>
				</form>
			</div>
			<button
				className={twMerge(
					"absolute z-10 cursor-pointer inset-0 text-3xl text-white duration-200 hover:-rotate-45",
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
							className="-rotate-90"
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
			</button>
		</div>
	);
};

export default Popup;
