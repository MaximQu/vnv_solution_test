import { Fragment, useState } from "react";
import Button from "../../ui/Button";
import Title from "../../ui/TItle";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../animationOnScroll";
import { servicesData } from "../../allData";

const Services = () => {
	const [activeTab, setActiveTab] = useState("Custom Web");
	return (
		<section className="py-5 md:py-7 lg:py-10" id="services">
			<div className="container">
				<Title>Services</Title>
				<ul className="scroll- mb-6 flex gap-4 overflow-x-scroll pb-2">
					{servicesData.map((item, index) => (
						<motion.li
                        variants={fadeInAnimationVariants}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							custom={index}
							key={item.id}
							onClick={() => setActiveTab(item.tab)}
							className={twMerge(
								"min-w-[11rem] cursor-pointer whitespace-nowrap bg-white/10 px-2 py-4 text-center text-lg backdrop-blur-md duration-150 hover:bg-white/50",
								activeTab === item.tab && "bg-white/50",
							)}
						>
							{item.tab}
						</motion.li>
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
