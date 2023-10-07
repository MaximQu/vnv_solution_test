import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Popup = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="fixed bottom-10 right-5 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue">
			<span
				className="absoluttext-white text-4xl cursor-pointer duration-200 hover:-rotate-45"
				onClick={() => setVisible((prev) => !prev)}
			>
				{!visible ? <>%</> : <>x</>}
			</span>
			<p
				className={twMerge(
					"absolute w-72 translate-x-full rounded-3xl bg-blue/80 p-4 text-xl backdrop-blur-sm duration-300",
					visible && "-translate-x-40",
				)}
			>
				Discount for the first order!
			</p>
		</div>
	);
};

export default Popup;
