import Button from "../../ui/Button";

const Hero = () => {
	return (
		<section className="relative isolate flex flex-col justify-center bg-[url('/images/hero-bg.jpg')] min-h-[100svh] bg-cover bg-fixed bg-center px-0 before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:bg-black/30 md:p-5">
			<div className="container flex flex-col items-start justify-center ">
				<h1 className="mb-20 text-5xl font-thin leading-snug md:text-7xl">
					Easy, quality, IT - <b className="font-bold text-blue">w</b>inning
					<span className="sm:block">
						<strong className="font-bold"> solutions</strong>
					</span>
					<span className="xs:block"> for your</span> busine<s>ss</s>
				</h1>
				<Button className="m-0">Order</Button>
			</div>
		</section>
	);
};

export default Hero;
