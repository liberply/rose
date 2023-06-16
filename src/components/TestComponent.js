import {
	DiscoveryContext,
	//DiscoveryComponent,
	useComponentData,
	useDiscoveryAsset,
} from "@discoverycms/connector";
import TestComponentButton from "./TestComponentButton";

function TestComponent({ componentId }) {
	const componentData = useComponentData(componentId, DiscoveryContext);

	const video = useDiscoveryAsset(componentData.Background_video._id, {});
	console.log(video);

	if (componentData === undefined) {
		return <span>Loading..</span>;
	}
	return (
		<div className="bg-white py-12" data-discovery-id={componentId}>
			<div className="text-blue-900 font-semibold text-4xl mb-12 flex justify-center">
				<p>Enabled: {(componentData.Card_enabled = true ? "true" : "false")}</p>
				<p>
					<b>Title:</b> {componentData.Title_text ?? ""}
				</p>
				<h3>Media:</h3>
				<a href={componentData.Foreground_image?.url ?? "NO URL"}>
					{componentData.Foreground_image?.metadata?.title}
				</a>
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
