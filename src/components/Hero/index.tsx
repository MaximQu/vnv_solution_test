import Button from "../../ui/Button";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsEl } from "../animationOnScroll";

const Hero = () => {
	return (
		<section className="relative isolate flex h-[100svh] flex-col justify-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center px-0 before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:bg-black/30 md:bg-fixed md:p-5">
			<div className="container flex flex-col items-start justify-center">
				<motion.h1
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInAnimationVariantsEl}
					className="mb-20 text-5xl font-thin leading-snug md:text-7xl"
				>
					Easy, quality, IT - <br />{" "}
					<b className="font-bold text-blue">w</b>
					inning
					<strong className="font-bold"> solutions </strong>
					<br />
					for your business
				</motion.h1>
				<Button className="m-0">Order</Button>
			</div>
		</section>
	);
};

export default Hero;
