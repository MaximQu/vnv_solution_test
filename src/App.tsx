import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Advantages from "./components/Advantages";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import Popup from "./components/Popup";
import Breif from "./components/Brief";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
	return (
		<>
			<AnimatedCursor
				innerSize={16}
				outerSize={16}
				color="0, 188, 212"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
				clickables={[
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					"label[for]",
					"textarea",
					"button",
					"a",
				]}
			/>
			<Header />
			<main className="font-ibmPlexMono">
				<Hero />
				<Advantages />
				<Services />
				<Projects />
				<ContactUs />
				<Breif />
				<Faq />
				<Popup />
			</main>
			<Footer />
		</>
	);
};

export default App;
