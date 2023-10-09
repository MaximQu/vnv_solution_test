import { useState } from "react";
import { twMerge } from "tailwind-merge";

const listItemStyles =
	"relative before:absolute before:-bottom-1 before:right-0 before:h-0.5 before:w-0 before:bg-blue before:duration-200 hover:text-blue hover:before:left-0 hover:before:right-auto hover:before:w-full font-thin uppercase";
const Header = () => {
	const [active, setActive] = useState(false);
	return (
		<header className="fixed left-0 top-0 z-50 w-full bg-[#211F28] py-2">
			<nav className="container flex items-center justify-between gap-3">
				<a href="/index.html" className="block ">
					<img
						src="./images/logo.png"
						className="h-10 w-16 object-contain md:h-12 md:w-24"
						alt="VNV Solution"
					/>
				</a>
				<ul
					className={twMerge(
						"absolute left-full top-0 z-10 flex h-auto w-full flex-col items-center justify-end gap-4 bg-[#211F28] py-3 text-2xl duration-300 lg:static lg:flex-row",
						active &&
							"left-0 h-screen w-screen flex-col justify-center py-0",
					)}
				>
					<li
						className={listItemStyles}
						onClick={() => setActive(false)}
					>
						<a href="#advantages">Advantages</a>
					</li>
					<li
						className={listItemStyles}
						onClick={() => setActive(false)}
					>
						<a href="#services">Services</a>
					</li>
					<li
						className={listItemStyles}
						onClick={() => setActive(false)}
					>
						<a href="#projects">Projects</a>
					</li>
					<li
						className={listItemStyles}
						onClick={() => setActive(false)}
					>
						<a href="#contacts">Contacts</a>
					</li>
					<li
						className={listItemStyles}
						onClick={() => setActive(false)}
					>
						<a href="#brief">Brief</a>
					</li>
					<li
						className={listItemStyles}
						onClick={() => setActive(false)}
					>
						<a href="#faq">Faq</a>
					</li>
				</ul>
				<button
					type="button"
					onClick={() => setActive((prev) => !prev)}
					className={twMerge(
						"relative z-50 h-6 w-8 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-full before:origin-[left_center] before:bg-white before:duration-150 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-[left_center] after:bg-white after:duration-150 lg:hidden",
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
