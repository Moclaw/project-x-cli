import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const Model = () => {
	const [model, setModel] = useState();
	const file = "src/assets/model/heart.obj";
	useEffect(() => {
		console.log(file);
		new OBJLoader().load(file, setModel);
	}, []);

	return model ? <primitive object={model} /> : null;

};

const Threejs = () => {
	const [modelRotation, setModelRotation] = useState([0, 0, 0]);
	useEffect(() => {
		const randome = Math.random() * 0.1;
		const interval = setInterval(() => {
			setModelRotation([0, modelRotation[1] + randome, modelRotation[2] + randome]);
		}, 10);
		return () => clearInterval(interval);
	}, [modelRotation]);

	return (
		<Canvas
			camera={{ position: [10, -30, 15] }}
			style={{ height: "40vh", width: "100vw" }}
		>
			<OrbitControls />
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 15, 10]} angle={0.3} />
			<Stars />
			<Suspense fallback={null}>
				<group rotation={modelRotation}>
					<Model />
				</group>
			</Suspense>
		</Canvas>
	);
}

export default Threejs;
