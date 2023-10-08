import { useState } from "react";
import { twMerge } from "tailwind-merge";

const listItemStyles =
	"relative before:absolute before:-bottom-1 before:right-0 before:h-0.5 before:w-0 before:bg-blue before:duration-200 hover:text-blue hover:before:left-0 hover:before:right-auto hover:before:w-full font-thin uppercase";
const Header = () => {
	const [active, setActive] = useState(false);
	return (
		// <header className="bg-[#211F28] py-4">
		// 	<div className="container flex items-center justify-between gap-3">
		// 		<a href="/index.html" className="block h-16 w-24 object-cover">
		// 			<img src="/images/logo.png" alt="VNV Solution" />
		// 		</a>
		// 		<div className="flex gap-3">
		// 			<nav className="absolute h-full w-full overflow-hidden">
		// 				<ul
		// 					className={twMerge(
		// 						"absolute left-full top-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#211F28] py-5 text-2xl duration-300 lg:static lg:flex-row",
		// 						active && "left-0 flex-col",
		// 					)}
		// 				>
		// 					<li
		// 						className={listItemStyles}
		// 						onClick={() => setActive}
		// 					>
		// 						<a href="#advantages" className="">
		// 							Advantages
		// 						</a>
		// 					</li>
		// 					<li className={listItemStyles}>
		// 						<a href="#services" className="">
		// 							Services
		// 						</a>
		// 					</li>
		// 					<li className={listItemStyles}>
		// 						<a href="#projects" className="">
		// 							Projects
		// 						</a>
		// 					</li>
		// 					<li className={listItemStyles}>
		// 						<a href="#contacts" className="">
		// 							Contacts
		// 						</a>
		// 					</li>
		// 					<li className={listItemStyles}>
		// 						<a href="#brief" className="">
		// 							Brief
		// 						</a>
		// 					</li>
		// 					<li className={listItemStyles}>
		// 						<a href="#faq" className="">
		// 							Faq
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</nav>
		// 			<button
		// 				type="button"
		// 				onClick={() => setActive((prev) => !prev)}
		// 				className={twMerge(
		// 					"relative z-50 m-auto h-6 min-w-[30px] before:absolute before:left-0 before:top-0 before:h-0.5 before:w-full before:origin-[left_center] before:bg-white before:duration-150 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-[left_center] after:bg-white after:duration-150 lg:hidden",
		// 					active &&
		// 						"block before:-top-0 before:rotate-45 after:bottom-0 after:-rotate-45",
		// 				)}
		// 			>
		// 				<div
		// 					className={twMerge(
		// 						"h-0.5 w-full bg-white duration-150",
		// 						active && "scale-0",
		// 					)}
		// 				></div>
		// 			</button>
		// 		</div>
		// 	</div>
		// </header>

		<header className="bg-[#211F28] py-4 fixed top-0 left-0 w-full z-50">
			<nav className="container flex items-center justify-between gap-3">
				<a href="/index.html" className="block h-16 w-24 object-cover">
					<img src="/images/logo.png" alt="VNV Solution" />
				</a>
				<ul
					className={twMerge(
						"absolute left-full top-0 w-full h-auto z-10 flex flex-col items-center justify-end gap-4 bg-[#211F28] py-5 text-2xl duration-300 lg:static lg:flex-row",
						active && "left-0 w-screen top-20 h-screen justify-center flex-col",
					)}
				>
					<li className={listItemStyles} onClick={() => setActive}>
						<a href="#advantages" className="">
							Advantages
						</a>
					</li>
					<li className={listItemStyles}>
						<a href="#services" className="">
							Services
						</a>
					</li>
					<li className={listItemStyles}>
						<a href="#projects" className="">
							Projects
						</a>
					</li>
					<li className={listItemStyles}>
						<a href="#contacts" className="">
							Contacts
						</a>
					</li>
					<li className={listItemStyles}>
						<a href="#brief" className="">
							Brief
						</a>
					</li>
					<li className={listItemStyles}>
						<a href="#faq" className="">
							Faq
						</a>
					</li>
				</ul>
				<button
					type="button"
					onClick={() => setActive((prev) => !prev)}
					className={twMerge(
						"relative h-6 w-8 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-full before:origin-[left_center] before:bg-white before:duration-150 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-[left_center] after:bg-white after:duration-150 lg:hidden",
						active && "before:rotate-45 after:-rotate-45",
					)}
				>
					<div
						className={twMerge(
							"h-0.5 w-full bg-white duration-150",
							active && "scale-0",
						)}
					></div>
				</button>
			</nav>
		</header>
	);
};

export default Header;
