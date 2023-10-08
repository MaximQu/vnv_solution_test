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
		<div className="flex items-center justify-center gap-8">
			<form
				className="form-container mb-5 flex w-full max-w-lg flex-col gap-10 border-l-[6px] border-l-blue bg-[#282828] p-5"
				action=""
				method="post"
				autoComplete="true"
			>
			<Title className="text-center mb-0">Contact us</Title>
				<div className="relative">
					<label className="group text-xl">
						<span
							className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50 duration-150",
								isEmpty.userName && "-top-7 left-0 opacity-100 text-base",
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
						<span className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50 duration-150",
								isEmpty.userPhone && "-top-7 left-0 opacity-100 text-base",
							)}>
							Phone number
						</span>
						<Input type="tel" name="userPhone" onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								handleInputChange(e.target.value, e.target.name)
							}/>
					</label>
				</div>
				<div className="relative">
					<label className="group text-xl">
						<span className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50 duration-150",
								isEmpty.userEmail && "-top-7 left-0 opacity-100 text-base",
							)}>
							Email
						</span>
						<Input type="email" name="userEmail" onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								handleInputChange(e.target.value, e.target.name)
							}/>
					</label>
				</div>
				<div className="relative">
					<label className="group text-xl">
						<span className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50 duration-150",
								isEmpty.userTGNick && "-top-7 opacity-100 left-0 text-base",
							)}>
							Telegram nick
						</span>
						<Input name="userTGNick" onChange={(
								e: React.ChangeEvent<HTMLInputElement>,
							) =>
								handleInputChange(e.target.value, e.target.name)
							}/>
					</label>
				</div>
				<div className="relative">
					<label className="group text-xl">
						<span className={twMerge(
								"absolute left-2 top-2 text-xl opacity-50  duration-150",
								isEmpty.userMessage && "-top-7 left-0 opacity-100 text-base",
							)}>
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
			<img
				src="/images/substance-1.png"
				className="hidden lg:block max-w-sm object-contain grayscale"
				alt=""
			/>
		</div>
	);
};

export default Form;
