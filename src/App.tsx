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
import Cursor from "./components/Cursor";

const App = () => {

	return (
		<>
        <Cursor/>
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
