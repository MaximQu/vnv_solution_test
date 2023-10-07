import Button from "../../ui/Button";

const anvantagesData = [
	{
		id: "1",
		title: "Global Reach and Accessibility",
		description:
			"Developing a web application allows an IT company to create a product that is accessible from anywhere with an internet connection. ",
	},
	{
		id: "2",
		title: "Cost-Effective Development",
		description:
			"Web applications often require fewer resources and are more cost-effective to develop compared to traditional desktop software. ",
	},
	{
		id: "3",
		title: "Cross-Platform Compatibility",
		description:
			"Web applications can run on various devices and operating systems, reducing the need for separate development for each platform.",
	},
	{
		id: "4",
		title: "Easy Updates and Maintenance",
		description:
			"Web applications can be updated centrally on the server, making it easier for IT companies to roll out bug fixes, feature enhancements, and security updates.",
	},
	{
		id: "5",
		title: "Data Analytics and Insights",
		description:
			"Web applications provide a platform to collect and analyze user data, helping IT companies gain valuable insights into user behavior and preferences. ",
	},
	{
		id: "6",
		title: "Scalability and Flexibility",
		description:
			"IT companies can add resources or optimize server configurations as needed to ensure the application's performance remains robust and responsive, even during periods of high traffic or growth.",
	},
];

const itemStyles =
	"hover:text-primary relative isolate max-w-full overflow-hidden px-3 py-2 transition before:absolute before:right-0 before:top-0 before:-z-10 before:h-12 before:w-12 before:rounded-bl-full before:bg-white hover:before:h-full hover:before:w-full hover:before:rounded-none before:duration-200 group";
const Advantages = () => {
	return (
		<section className="py-10">
			<h2 className="mb-6">Why us</h2>
			<ul className="flex flex-col gap-3 mb-5">
				{anvantagesData.map((item) => (
					<li key={item.id} className={itemStyles}>
						<h3 className="group-hover:text-blue mb-3 flex gap-2 pr-8 text-2xl font-bold delay-0 group-hover:delay-200">
							{item.title}
							<span className="text-primary group-hover:text-blue absolute right-2 top-1.5">
								{item.id}.
							</span>
						</h3>
						<p className="text-lg ">{item.description}</p>
					</li>
				))}
			</ul>
            <Button>
                Order
            </Button>
		</section>
	);
};

export default Advantages;
