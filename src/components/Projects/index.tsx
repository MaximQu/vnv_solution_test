// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";

import { projectsData } from "../../allData";
import { fadeInAnimationVariantsEl } from "../animationOnScroll";
import Title from "../../ui/TItle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
	return (
		<motion.section
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			variants={fadeInAnimationVariantsEl}
			className="py-5"
			id="projects"
		>
			<div className="container">
				<Title>Our projects</Title>
				<Swiper
					// install Swiper modules
					modules={[Pagination]}
					spaceBetween={30}
					slidesPerView={1}
                    loop={true}
					grabCursor={true}
					pagination={{ clickable: true }}
					breakpoints={{
						575: {
							slidesPerView: 1,
						},
						640: {
							slidesPerView: 2,
						},
						991: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1399: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					className="pb-8 md:py-7 lg:py-10"
				>
					{projectsData.map((project) => (
						<SwiperSlide
							key={project.id}
							className="flex flex-col bg-white/10"
						>
							<a
								className="cursor-grab"
								key={project.id}
								href={project.projectUrl}
							>
								<img
									className="mb-5"
									src={project.imgUrl}
									alt={project.title}
								/>
								<div className="px-4 pb-4">
									<h3 className="mb-3 text-3xl">
										{project.title}
									</h3>
									<p className="line-clamp-4 text-base ">
										{project.description}
									</p>
								</div>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</motion.section>
	);
};

export default Projects;
