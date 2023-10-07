import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqData = [
	{
		id: "1",
		qustion:
			"What is the typical development timeline for a custom web application?",
		answer: "The development timeline for a web application can vary significantly depending on project complexity. However, we usually provide an estimated timeline during the project scoping phase, taking into account your specific requirements and desired features.",
	},
	{
		id: "2",
		qustion:
			"How do you ensure the security of web applications developed by your company?",
		answer: "Security is a top priority for us. We employ industry best practices such as code reviews, penetration testing, and data encryption to safeguard your web application. We also stay updated on security threats and regularly update software components to mitigate risks.",
	},
	{
		id: "3",
		qustion:
			"How do you handle scalability for web applications as our user base grows?",
		answer: "We design web applications with scalability in mind. By leveraging cloud technologies and architecture, we can easily scale resources to accommodate increased user traffic or data loads without compromising performance.",
	},
	{
		id: "4",
		qustion:
			"Can you provide ongoing maintenance and support for web applications after development?",
		answer: "Yes, we offer comprehensive maintenance and support services. We provide updates, bug fixes, and enhancements to ensure your web application remains secure, up-to-date, and aligned with your evolving business needs.",
	},
	{
		id: "5",
		qustion:
			"What technologies and development methodologies do you typically use for web application development?",
		answer: "We use a wide range of technologies and methodologies tailored to each project's requirements. This may include front-end technologies like React or Angular, back-end technologies like Node.js or Python, and agile or DevOps methodologies to ensure efficient development and delivery.",
	},
];

const Faq = () => {
	const [visible, setVisible] = useState(false);
	return (
		<section className="py-10">
			<ul className="grid grid-cols-1 grid-rows-3 gap-3">
				{faqData.map((item) => (
					<li key={item.id}>
						<p
							onClick={() => setVisible((prev) => !prev)}
							className="relative pr-7 before:absolute before:h-1 before:w-5 before:right-0 before:top-3 after:right-0 after:top-3 before:bg-white after:absolute after:h-1 after:w-5 after:rotate-90 after:bg-white"
						>
							{item.qustion}
						</p>
						<p className={twMerge("hidden", visible && "block mt-3")}>
							{item.answer}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Faq;
