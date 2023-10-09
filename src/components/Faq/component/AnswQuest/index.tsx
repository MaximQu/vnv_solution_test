import { twMerge } from "tailwind-merge";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

type answerProps = {
	item: {
		id: string;
		question: string;
		answer: string;
	};
};

const asnwerStyles =
	"relative text-xl font-semibold pr-7 before:absolute before:rounded-[100%] after:rounded-[100%] before:right-0 before:top-3 before:h-1 before:w-5 before:bg-primary after:absolute cursor-pointer after:right-0 after:top-3 after:h-1 after:w-5 after:rotate-90 after:bg-primary before:duration-200 after:duration-200 duration-200";

const AnswQuest = forwardRef<HTMLDivElement, answerProps>(({ item }: answerProps, ref) => {
	const [visible, setVisible] = useState(false);
	return (
		<div
        ref={ref}
			className={twMerge(
				"grid grid-rows-[min-content_0fr] bg-white/20 p-2 duration-200",
				visible && "grid-rows-[min-content_1fr]",
			)}
		>
			<p
				onClick={() => setVisible((prev) => !prev)}
				className={twMerge(
					asnwerStyles,
					visible &&
						"pb-4 text-blue before:-rotate-45 after:rotate-45",
				)}
			>
				{item.question}
			</p>
			<div className="overflow-hidden text-lg">
				<p>{item.answer}</p>
			</div>
		</div>
	);
})

export default motion(AnswQuest);
