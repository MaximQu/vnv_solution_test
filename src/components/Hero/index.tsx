import Button from "../../ui/Button";

const Hero = () => {
	return (
		<section className="relative isolate bg-[url('/images/hero-bg.jpg')] bg-center bg-cover p-5 before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:bg-black/30">
			<div className="container flex flex-col justify-center min-h-screen lg:min-h-[80vh]">
				<h1 className="mb-3 lg:text-7xl text-4xl font-thin leading-snug">
					Easy, quality, IT - <b className="font-bold">w</b>inning
					<span className="block">
						<strong className="font-bold">solutions</strong>
					</span>
					<span className="block">for your</span>business
				</h1>
				<Button>Order</Button>
			</div>
		</section>
	);
};

export default Hero;
