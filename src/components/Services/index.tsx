import { Fragment, useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/TItle";
import { twMerge } from "tailwind-merge";

const servicesData = [
	{
		id: "1",
		tab: "Custom Web",
		title: "Custom Web Application Development",
		body: " Tailored solutions designed from scratch to meet your unique business needs, ensuring optimal functionality and user experience.",
	},
	{
		id: "2",
		tab: "E-commerce",
		title: "E-commerce Platform Development",
		body: "Building robust online stores with secure payment gateways, inventory management, and seamless user interfaces to boost your online sales.",
	},
	{
		id: "3",
		tab: "Web Application",
		title: "Web Application Maintenance and Support",
		body: "Ongoing technical support, bug fixes, and regular updates to keep your web application running smoothly and securely.",
	},
	{
		id: "4",
		tab: "Responsive Design",
		title: "Responsive Design and Optimization",
		body: "Crafting mobile-friendly and visually appealing web apps, while optimizing performance and load times for exceptional user satisfaction.",
	},
	{
		id: "5",
		tab: "Cloud Integration",
		title: "Cloud Integration and Scalability",
		body: "Leveraging cloud technologies to ensure scalability, flexibility, and cost-efficiency as your business grows and evolves.",
	},
	{
		id: "6",
		tab: "Security",
		title: "Security and Compliance",
		body: "Implementing robust security measures, data encryption, and compliance with industry standards to protect your web application and user data from threats and breaches.",
	},
];

const Services = () => {
	const [activeTab, setActiveTab] = useState("Custom Web");
	return (
		<section className="py-5 md:py-7 lg:py-10" id="services">
			<div className="container">
				<Title>Services</Title>
				<ul className="scroll- mb-6 flex gap-4 overflow-x-scroll pb-2">
					{servicesData.map((item) => (
						<li
							key={item.id}
							onClick={() => setActiveTab(item.tab)}
							className={twMerge(
								"min-w-[11rem] cursor-pointer whitespace-nowrap bg-white/10 px-2 py-4 text-center text-lg backdrop-blur-md duration-150 hover:bg-white/50",
								activeTab === item.tab && "bg-white/50",
							)}
						>
							{item.tab}
						</li>
					))}
				</ul>
				<div className="relative min-h-[15rem] text-xl text-white before:absolute before:inset-0 before:-z-10 before:m-auto before:h-[110%] before:w-[80%] before:skew-x-12 before:rounded-2xl before:bg-blue before:duration-100 hover:before:skew-x-0 md:min-h-min md:before:-top-3 md:before:bottom-auto md:before:h-[70%]">
					{servicesData
						.filter((item) => item.tab === activeTab)
						.map((item) => (
							<Fragment key={item.id}>
								<div className="mb-8 min-h-[15rem] bg-white/10 p-4 backdrop-blur-md md:min-h-min">
									<h3 className="mb-3 text-xl font-bold">
										{item.title}
									</h3>
									<p className="text-lg">{item.body}</p>
								</div>
								<Button className="md:max-w-[12.5rem]">
									WANT IT
								</Button>
							</Fragment>
						))}
				</div>
			</div>
		</section>
	);
};

export default Services;
