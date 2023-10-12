import { anvantagesData } from "../../allData";
import Button from "../../ui/Button";
import Title from "../../ui/TItle";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../animationOnScroll";

const itemStyles =
	"hover:text-primary relative isolate max-w-full overflow-hidden px-3 py-2 transition before:absolute before:right-0 before:top-0 before:-z-10 before:h-12 before:w-12 sm:bg-transparent bg-white sm:text-white text-primary sm:before:bg-blue before:rounded-bl-full before:bg-[#211F28] hover:before:h-full hover:before:w-full hover:before:rounded-none before:duration-200 group";
const Advantages = () => {
	return (
		<section
			className="bg-[#211F28] py-5 md:py-7 lg:py-10"
			id="advantages"
		>
			<div className="container">
				<Title>Why us</Title>
				<ul className="mb-5 grid grid-cols-1 gap-3 lg:grid-cols-2">
					{anvantagesData.map((item, index) => (
						<motion.li
							variants={fadeInAnimationVariants}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							custom={index}
							key={item.id}
							className={itemStyles}
						>
							<h3 className="mb-3 flex gap-2 pr-8 text-2xl font-bold delay-0 duration-100 md:group-hover:text-primary ">
								{item.title}
								<span className="absolute right-2 top-1.5 text-white group-hover:text-black">
									{item.id}.
								</span>
							</h3>
							<p className="text-lg">{item.description}</p>
						</motion.li>
					))}
				</ul>
				<Button>Order</Button>
			</div>
		</section>
	);
};

export default Advantages;
