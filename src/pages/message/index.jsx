import React from 'react'
import { Input, Button } from "@material-tailwind/react";
import './style.css';

const MessageItem = (message) => {
	return (
		<>
			<div className="message-item">
				<div className="message-item__content">
					<div className="message-item__content__name">
						<p>
							{message.name}
						</p>
					</div>
					<div className="message-item__content__message">
						<p>
							{message.message}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}





const InputMessage = () => {
	const [text, setText] = React.useState("");
	const handleSendMessage = (text) => {
		console.log(text);
	}

	return (
		<div className="input-container">
			<Input label="Message"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<Button
				onClick={() => handleSendMessage(text)}
			>
				Send
			</Button>
		</div>
	)
}

const Text = () => {
	return (
		<div>
			<h1>Messages</h1>
		</div>
	)
}

function Message() {
	const [listmessages, setListMessages] = React.useState([
		// {
		// 	id: 1,
		// 	name: "John Doe",
		// 	message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		// },
		// {
		// 	id: 2,
		// 	name: "John Doe",
		// 	message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		// },
		// {
		// 	id: 3,
		// 	name: "John Doe",
		// 	message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		// }
	]
	)
	const isMessage = listmessages?.length <= 0 ? false : true;

	return (
		<div className="message-container fixed inset-x-0">
			<Text />
			<div className="messages-list">

				{isMessage ? listmessages.map((message) => (
					<MessageItem
						message={message}
						{...message}
					/>
				)) : <p>There is no message</p>}
			</div>
			<InputMessage />
		</div>
	)
}

export default Message;
