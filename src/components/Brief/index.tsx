import Button from "../../ui/Button";
import Title from "../../ui/TItle";

const breifData = [
	{
		id: "1",
		text: "Information about the client's company (its specialization, features, competitive advantages)",
	},
	{
		id: "2",
		text: "A concept, an idea of a project to work on",
	},
	{
		id: "3",
		text: "Target audience (for whom the product is developed)",
	},
	{
		id: "4",
		text: "Specifications (depends on the specific service)",
	},
	{
		id: "5",
		text: "Deadlines",
	},
	{
		id: "6",
		text: "Expected results",
	},
	{
		id: "7",
		text: "Customer contacts",
	},
	{
		id: "8",
		text: "Additional information (you need to give the client the opportunity to add something important that was not mentioned in the brief)",
	},
];

const Breif = () => {
	return (
		<section className="py-5 md:py-7 lg:py-10" id="brief">
			<div className="container">
				<Title>Filling out the brief</Title>
				<p className="mb-4">
					<dfn className="text-blue">
						<strong>Brief</strong>
					</dfn>{" "}
					— is a questionnaire document that describes all main
					project tasks, requirements, and inputs.
				</p>
				<h2 className="mb-4 text-2xl">
					What are the components of a brief?
				</h2>
				<ul className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2">
					{breifData.map((item) => (
						<li
							key={item.id}
							className="bg-white  p-2 font-medium text-primary"
						>
							- {item.text}.
						</li>
					))}
				</ul>
				<p className="mb-4 border-l-4 border-l-blue bg-blue/60 p-2 pl-5">
					<strong>An important caveat : </strong>a brief is not a
					technical task (TT). Yes, both documents are are similar,
					but they have different tasks. The brief is needed to to
					understand what you need to work on, what the main goal of
					the project is. A statement of work is a specific task with
					certain technical characteristics. characteristics. If the
					project is large, there may be several of them for for a
					particular service or product. Most often, the brief becomes
					the basis for the TOR.
				</p>
				<Button>Fill brief now</Button>
			</div>
		</section>
	);
};

export default Breif;
