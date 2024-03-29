import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// eslint-disable-next-line
import App from "./App"; // non rimuovere questo import (compilatore segnala come never used)
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Carousel from "./pages/Carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/carousel" element={<Carousel />} />
				<Route path="/test" element={<Carousel />} />
				<Route path="/canvas" element={<Carousel />} />
				<Route path="/testreply" element={<Carousel />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
