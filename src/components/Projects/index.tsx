// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectsData = [
	{
		id: "1",
		projectUrl: "#",
		title: "Project 1",
		imgUrl: "/images/cement.jpg",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel tempore qui saepe, quod consequatur consectetur non ea voluptatem illo error enim adipisci doloribus quisquam et accusamus consequuntur quidem dolorum eaque rem harum molestiae tempora recusandae! Minus, totam ratione repudiandae dolorum fugit consequatur, voluptas reiciendis et quod quis illum minima at.",
	},
	{
		id: "2",
		projectUrl: "#",
		title: "Project 2",
		imgUrl: "/images/cement.jpg",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt minus fuga suscipit voluptatem deserunt nemo sapiente nihil architecto reprehenderit vero, accusamus vel provident mollitia iure odio, quis enim voluptate soluta natus? Ducimus, cupiditate. Minus, harum officia sunt id inventore repellat delectus odio incidunt sint illo corporis dignissimos quia sed veritatis!",
	},
	{
		id: "3",
		projectUrl: "#",
		title: "Project 3",
		imgUrl: "/images/cement.jpg",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non provident hic reprehenderit corrupti quis sed et debitis! Magni fugit totam, debitis voluptates maxime dolorum corporis amet facilis perspiciatis voluptatum aperiam expedita ipsam animi eaque tempore maiores, optio modi eveniet excepturi? Enim temporibus doloremque dicta iusto atque, a iure natus corporis?",
	},
	{
		id: "4",
		projectUrl: "#",
		title: "Project 4",
		imgUrl: "/images/cement.jpg",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel tempore qui saepe, quod consequatur consectetur non ea voluptatem illo error enim adipisci doloribus quisquam et accusamus consequuntur quidem dolorum eaque rem harum molestiae tempora recusandae! Minus, totam ratione repudiandae dolorum fugit consequatur, voluptas reiciendis et quod quis illum minima at.",
	},
	{
		id: "5",
		projectUrl: "#",
		title: "Project 5",
		imgUrl: "/images/cement.jpg",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non provident hic reprehenderit corrupti quis sed et debitis! Magni fugit totam, debitis voluptates maxime dolorum corporis amet facilis perspiciatis voluptatum aperiam expedita ipsam animi eaque tempore maiores, optio modi eveniet excepturi? Enim temporibus doloremque dicta iusto atque, a iure natus corporis?",
	},
];

const Projects = () => {
	return (
		<section>
			<h2 className="mb-5">Our projects</h2>
			<Swiper
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				grabCursor={true}
				pagination={{ clickable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				className="pb-8"
			>
				{projectsData.map((project) => (
					<SwiperSlide key={project.id} className="flex flex-col bg-white/10 p-2">
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
							<h3 className="mb-3 text-3xl">{project.title}</h3>
							<p className="text-base line-clamp-4">{project.description}</p>
						</a>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Projects;
