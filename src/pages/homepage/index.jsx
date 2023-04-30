import React from "react";
import Threejs from "../../components/threejs";
import { Button } from "@material-tailwind/react";

function HomePage() {
	return (
		<div>
			<main >
				<Threejs />
				<div className="relative text-center left-auto right-auto">
					<h5>This's a homepage</h5>
					<p>You can see about me or text with me</p>
					<Button color="blue"
					>Click here</Button>
				</div>
				<Threejs />
			</main>
		</div>
	);
}

export default HomePage;
