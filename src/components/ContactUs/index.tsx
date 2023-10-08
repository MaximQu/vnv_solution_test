import Socials from "../../ui/Socials";
import Form from "./components/Form";

const ContactUs = () => {
	return (
		<section className="py-5 md:py-7 lg:py-10 bg-[url('/images/contact-bg.png')] bg-no-repeat bg-cover bg-center" id="contacts">
            <Form/>
			<h3 className="mb-4 text-center text-3xl">Get in touch</h3>
			<Socials/>
		</section>
	);
};

export default ContactUs;
