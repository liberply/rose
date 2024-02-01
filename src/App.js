import logo from "./logo.svg";
import "./App.css";
import { setupDiscoveryCms /*getDiscoveryCms*/ } from "@discoverycms/connector";
import TestComponent from "./components/TestComponent";
import TestComponentButton from "./components/TestComponentButton";
import TestCarousel from "./components/TestCarousel";

const env = process.env.REACT_APP_ENV;

if (env === "stage") {
	setupDiscoveryCms({
		apiRoot: process.env.REACT_APP_API_URL_STAGE,
		apiToken: process.env.REACT_APP_TOKEN_STAGE,
		propertyTitle: process.env.REACT_APP_PROPERTY_TITLE_STAGE,
		components: {
			//ComponentTypeName: ComponentRenderer,
			card: TestComponent,
			card_button: TestComponentButton,
			Carousel: TestCarousel,
		},
		enableConnectorScript: true,
		disableCache: true,
		previewMode: true,
	});
	console.log("stage");
} else if (env === "prod") {
	setupDiscoveryCms({
		apiRoot: process.env.REACT_APP_API_URL_PROD,
		apiToken: process.env.REACT_APP_TOKEN_PROD,
		propertyTitle: process.env.REACT_APP_PROPERTY_TITLE_PROD,
		components: {
			//ComponentTypeName: ComponentRenderer,
			card: TestComponent,
			card_button: TestComponentButton,
			Carousel: TestCarousel,
		},
		enableConnectorScript: true,
		disableCache: true,
		previewMode: true,
	});
	console.log("prod");
} else if (env === "test") {
	setupDiscoveryCms({
		apiRoot: process.env.REACT_APP_API_URL_TEST,
		apiToken: process.env.REACT_APP_TOKEN_TEST,
		propertyTitle: process.env.REACT_APP_PROPERTY_TITLE_TEST,
		components: {
			//ComponentTypeName: ComponentRenderer,
			card: TestComponent,
			card_button: TestComponentButton,
			Carousel: TestCarousel,
		},
		enableConnectorScript: true,
		disableCache: true,
		previewMode: true,
	});
	console.log("test");
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<script async={true} src={"discovery-cms-connector.js"} />
		</div>
	);
}

export default App;
