import {
	DiscoveryContext,
	//DiscoveryComponent,
	useComponentData,
} from "@discoverycms/connector";
import TestComponent from "./TestComponent";

function TestCarousel({ componentId }) {
	const componentData = useComponentData(componentId, DiscoveryContext);

	if (componentData === undefined) {
		return <span>Loading..</span>;
	}

	console.log("TestCarousel" + componentData.Title_text);
	return (
		<div className="bg-white py-12" data-discovery-id={componentId}>
			<div className="text-blue-900 font-semibold text-4xl mb-12 flex justify-center">
				<h1>{componentData.Title_text ?? "Carousel"}</h1>
				<h2 style={{ color: "red" }}>Component IDs</h2>
				{componentData.cards.map((card, index) => {
					return (
						<div>
							<h3>Card #{index}</h3>
							<p>{card._id}</p>
						</div>
					);
				})}

				<h2 style={{ color: "red" }}>Components Values</h2>
				{componentData.cards.map((card, index) => {
					return (
						<div>
							<h3 style={{ color: "orange" }}>Card #{index}</h3>
							<TestComponent componentId={card._id} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default TestCarousel;
