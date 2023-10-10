import Socials from "../../ui/Socials";
import Form from "./components/Form";
import { fadeInAnimationVariantsEl } from "../animationOnScroll";
import { motion } from "framer-motion";

const ContactUs = () => {
	return (
		<motion.section
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			variants={fadeInAnimationVariantsEl}
			className="bg-[url('/images/contact-bg.png')] bg-cover bg-[center_bottom_-8.8rem] bg-no-repeat py-5 md:bg-center md:py-7 lg:py-10"
			id="contacts"
		>
			<div className="mx-auto mb-5 flex w-[min(calc(100%-2rem),50rem)] justify-center bg-gray-900/80 sm:justify-between md:bg-[#282828]">
				<Form />
				<div className="relative hidden w-[12.5rem] border-l-[6px] border-l-blue sm:block">
					<img
						src="./images/cement.jpg"
						className="absolute inset-0 h-full w-full object-cover"
						alt="Contact us"
					/>
				</div>
			</div>
			<h3 className="mb-4 text-center text-3xl">Get in touch</h3>
			<Socials />
		</motion.section>
	);
};

export default ContactUs;
