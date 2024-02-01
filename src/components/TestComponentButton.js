import {
	DiscoveryContext,
	//DiscoveryComponent,
	useComponentData,
} from "@discoverycms/connector";

function TestComponentButton({ componentId }) {
	const componentData = useComponentData(componentId, DiscoveryContext);
	if (componentData === undefined) {
		return <span>Loading..</span>;
	}
	console.log("TestComponentButton" + componentData.Button_url[0].url);
	return (
		<div
			style={{
				backgroundColor: "lemonchiffon",
			}}
			className="bg-white py-12"
			data-discovery-id={componentId}
		>
			<div className="text-blue-900 font-semibold text-4xl mb-12 flex justify-center">
				<p>
					<b>Button url:</b>
				</p>
				<a href={componentData.Button_url[0].url ?? "button url"}>
					{componentData.Button_text ?? "button text"}
				</a>
				<p>
					<b>Button color:</b>
				</p>
				<div>{componentData.Button_color ?? "button color"}</div>
			</div>
		</div>
	);
}

export default TestComponentButton;
