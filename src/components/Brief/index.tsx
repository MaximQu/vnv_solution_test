import { motion } from "framer-motion";
import { breifData } from "../../allData";
import Button from "../../ui/Button";
import Title from "../../ui/TItle";
import { fadeInAnimationVariants } from "../animationOnScroll";

const Breif = () => {
	return (
		<section className="py-5 md:py-7 lg:py-10" id="brief">
			<div className="container">
				<Title>Filling out the brief</Title>
				<p className="mb-4 text-xl">
					<dfn className="text-blue">
						<strong>Brief</strong>
					</dfn>{" "}
					— is a questionnaire document that describes all main
					project tasks, requirements, and inputs.
				</p>
				<h2 className="mb-4 text-2xl">
					What are the components of a brief?
				</h2>
				<ul className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2">
					{breifData.map((item, index) => (
						<motion.li
							variants={fadeInAnimationVariants}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							custom={index}
							key={item.id}
							className="bg-white  p-2 font-medium text-primary"
						>
							- {item.text}.
						</motion.li>
					))}
				</ul>
				<p className="mb-4 border-l-4 border-l-blue bg-blue/60 p-2 pl-5">
					<strong>An important caveat : </strong>a brief is not a
					technical task (TT). Yes, both documents are are similar,
					but they have different tasks. The brief is needed to to
					understand what you need to work on, what the main goal of
					the project is. A statement of work is a specific task with
					certain technical characteristics. characteristics.
				</p>
				<Button>Fill brief now</Button>
			</div>
		</section>
	);
};

export default Breif;
