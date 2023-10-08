import { useState } from "react";
import Input from "../Input";
import Button from "../../../../ui/Button";
import { twMerge } from "tailwind-merge";
import Title from "../../../../ui/TItle";

const Form = () => {
	const [isEmpty, setIsEmpty] = useState({
		userName: "",
		userEmail: "",
		userPhone: "",
		userTGNick: "",
		userMessage: "",
	});
	const handleInputChange = (value: string, name: string) => {
		setIsEmpty((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	return (
		<div className="mx-auto flex w-[min(calc(100%-2rem),50rem)] sm:justify-between justify-center bg-gray-900/80 md:bg-[#282828] mb-5">
			<form
				className="form-container flex w-full max-w-lg flex-col gap-10 sm:pl-14  p-5"
				action=""
				method="post"
				autoComplete="true"
			>
				<Title className="mb-0 text-center">Contact us</Title>
				<div className="relative">
					<label className="group text-xl">
						<span
							className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50 duration-150",
								isEmpty.userName &&
									"-top-7 left-0 text-base opacity-100",
							)}
						>
							Name
						</span>
						<Input
							name="userName"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								handleInputChange(e.target.value, e.target.name)
							}
						/>
					</label>
				</div>
				<div className="relative">
					<label className="group text-xl">
						<span
							className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50 duration-150",
								isEmpty.userPhone &&
									"-top-7 left-0 text-base opacity-100",
							)}
						>
							Phone number
						</span>
						<Input
							type="tel"
							name="userPhone"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								handleInputChange(e.target.value, e.target.name)
							}
						/>
					</label>
				</div>
				<div className="relative">
					<label className="group text-xl">
						<span
							className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50 duration-150",
								isEmpty.userEmail &&
									"-top-7 left-0 text-base opacity-100",
							)}
						>
							Email
						</span>
						<Input
							type="email"
							name="userEmail"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								handleInputChange(e.target.value, e.target.name)
							}
						/>
					</label>
				</div>
				<div className="relative">
					<label className="group text-xl">
						<span
							className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50 duration-150",
								isEmpty.userTGNick &&
									"-top-7 left-0 text-base opacity-100",
							)}
						>
							Telegram nick
						</span>
						<Input
							name="userTGNick"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								handleInputChange(e.target.value, e.target.name)
							}
						/>
					</label>
				</div>
				<div className="relative">
					<label className="group text-xl">
						<span
							className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50  duration-150",
								isEmpty.userMessage &&
									"-top-7 left-0 text-base opacity-100",
							)}
						>
							Message
						</span>
						<textarea
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>,
							) =>
								handleInputChange(e.target.value, e.target.name)
							}
							className="min-h-[10rem] w-full border border-transparent bg-blue/70 p-1 text-2xl outline-none focus:border-blue "
							name="userMessage"
							required
						/>
					</label>
				</div>
				<Button type="submit">Send</Button>
			</form>
			<div className="relative hidden sm:block w-[12.5rem] border-l-[6px] border-l-blue">
				<img
					src="./images/cement.jpg"
					className="absolute w-full h-full inset-0 object-cover"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Form;
