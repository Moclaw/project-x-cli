import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePgae from "./pages/HomePage";
import Message from "./pages/Message";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePgae />} />
				<Route path="message" element={<Message />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;