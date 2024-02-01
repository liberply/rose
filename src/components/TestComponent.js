import {
	DiscoveryContext,
	//DiscoveryComponent,
	useComponentData,
	//useDiscoveryAsset,
} from "@discoverycms/connector";
import TestComponentButton from "./TestComponentButton";

function TestComponent({ componentId }) {
	const componentData = useComponentData(componentId, DiscoveryContext);

	if (componentData === undefined) {
		return <span>Loading..</span>;
	}

	console.log("TestComponent" + componentData.Background_full_width_image.url);

	return (
		<div
			style={{
				backgroundColor: "lavender",
			}}
			className="bg-white py-12"
			data-discovery-id={componentId}
		>
			<div className="text-blue-900 font-semibold text-4xl mb-12 flex justify-center">
				<p>Enabled: {(componentData.Card_enabled = true ? "true" : "false")}</p>
				<p>
					<b>Title:</b> {componentData.Title_text ?? ""}
				</p>
				<h3>Media:</h3>
				<a href={componentData.Foreground_image?.url ?? "NO URL"}>
					{componentData.Foreground_image?.metadata?.title}
				</a>
				<h3>Layer:</h3>
				<p>{componentData.Transparent_layer_color ?? "No color"}</p>
				<p>{componentData.Transparent_layer_percentage ?? "No percentage"}</p>

				<h3>Text:</h3>
				<p>{componentData.Format_text ?? "No text"}</p>

				<h2 style={{ color: "red" }}>Buttons IDs</h2>
				{componentData.Buttons.map((button, index) => {
					return (
						<div>
							<h3>Button #{index}</h3>
							<div>{button._id}</div>
						</div>
					);
				})}
				<h2 style={{ color: "red" }}>Buttons values</h2>
				{componentData.Buttons.map((button, index) => {
					return (
						<div>
							<h3 style={{ color: "green" }}>Button #{index}</h3>
							<TestComponentButton componentId={button._id} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default TestComponent;
