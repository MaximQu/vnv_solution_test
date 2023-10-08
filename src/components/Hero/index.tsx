import Button from "../../ui/Button";

const Hero = () => {
	return (
		<section className="relative isolate bg-[url('/images/hero-bg.jpg')]  bg-fixed  bg-center bg-cover md:p-5 px-0 before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:bg-black/30">
			<div className="container flex flex-col justify-center items-start min-h-screen lg:min-h-[80vh]">
				<h1 className="mb-20 md:text-7xl text-5xl font-thin leading-snug">
					Easy, quality, IT - <b className="font-bold">w</b>inning
					<span className="sm:block">
						<strong className="font-bold"> solutions</strong>
					</span>
					<span className="xs:block"> for your</span> busine<s>ss</s>
				</h1>
				<Button className="m-0" >Order</Button>
			</div>
		</section>
	);
};

export default Hero;
