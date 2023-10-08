import Socials from "../../ui/Socials";

const Footer = () => {
	return (
		<footer className="py-5 bg-[#282828]">
			<div className="container flex justify-between items-center mb-6">
				<a href="/index.html" className="block h-24 w-36">
					<img src="./images/logo.png" alt="VNV Solution" />
				</a>
				<address>
					Karla Miklʹosha, 7
					<br />
					Lviv, Ukraine
				</address>
			</div>
			<Socials/>
		</footer>
	);
};

export default Footer;
