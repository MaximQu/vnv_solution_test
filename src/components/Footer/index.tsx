import Socials from "../../ui/Socials";

const Footer = () => {
	return (
		<footer className="bg-[#282828] py-5">
			<div className="container mb-6 flex items-center justify-between">
				<a href="./index.html">
					<img src="./images/logo.png" alt="VNV Solution" className="h-10 w-16 object-contain md:h-16 md:w-24"/>
				</a>
				<address>
					Karla Miklʹosha, 7
					<br />
					Lviv, Ukraine
				</address>
			</div>
			<Socials />
		</footer>
	);
};

export default Footer;
