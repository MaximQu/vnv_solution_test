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
			<Form />
			<h3 className="mb-4 text-center text-3xl">Get in touch</h3>
			<Socials />
		</motion.section>
	);
};

export default ContactUs;
