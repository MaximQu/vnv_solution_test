import { faqData } from "../../allData";
import Title from "../../ui/TItle";
import { fadeInAnimationVariants } from "../animationOnScroll";
import AnswQuest from "./component/AnswQuest";

const Faq = () => {
	return (
		<section
			className="bg-white py-5 text-primary md:py-7 lg:py-10"
			id="faq"
		>
			<div className="container">
				<Title>We are honest with our customers</Title>
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
					{faqData.map((item, index) => (
						<AnswQuest
							variants={fadeInAnimationVariants}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							custom={index}
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Faq;
