import Title from "../../ui/TItle";
import AnswQuest from "./component/AnswQuest";

const faqData = [
	{
		id: "1",
		question:
			"What is the typical development timeline for a custom web application?",
		answer: "The development timeline for a web application can vary significantly depending on project complexity. However, we usually provide an estimated timeline during the project scoping phase, taking into account your specific requirements and desired features.",
	},
	{
		id: "2",
		question:
			"How do you ensure the security of web applications developed by your company?",
		answer: "Security is a top priority for us. We employ industry best practices such as code reviews, penetration testing, and data encryption to safeguard your web application. We also stay updated on security threats and regularly update software components to mitigate risks.",
	},
	{
		id: "3",
		question:
			"Can you provide ongoing maintenance and support for web applications after development?",
		answer: "Yes, we offer comprehensive maintenance and support services. We provide updates, bug fixes, and enhancements to ensure your web application remains secure, up-to-date, and aligned with your evolving business needs.",
	},
	{
		id: "4",
		question:
			"How do you handle scalability for web applications as our user base grows?",
		answer: "We design web applications with scalability in mind. By leveraging cloud technologies and architecture, we can easily scale resources to accommodate increased user traffic or data loads without compromising performance.",
	},
	{
		id: "5",
		question:
			"What technologies and development methodologies do you typically use for web application development?",
		answer: "We use a wide range of technologies and methodologies tailored to each project's requirements. This may include front-end technologies like React or Angular, back-end technologies like Node.js or Python, and agile or DevOps methodologies to ensure efficient development and delivery.",
	},
];

const Faq = () => {
	return (
		<section className="py-5 md:py-7 lg:py-10 bg-white text-primary" id="faq">
			<div className="container">
				<Title>We are honest with our customers</Title>
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
					{faqData.map((item) => (
						<AnswQuest item={item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Faq;
