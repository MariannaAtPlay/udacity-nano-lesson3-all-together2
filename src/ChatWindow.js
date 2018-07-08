import React from 'react';
import ChatInput from './ChatInput';

const ChatWindow = (props) => {
	return (
		<div className="chat-window">
			<h2>Super Awesome Chat</h2>
			<div className="name sender">{props.user.username}</div>

			<ul className="message-list">
			{props.messages.map((message, index) => (
				<li
				key={index}
				className={
					message.username === props.user.username ? 'message sender' : 'message recipient'
				}
				>
				<p>{`${message.username}: ${message.text}`}</p>
				</li>
			))}
			</ul>

			<ChatInput addMessage={props.addMessage} username={props.user.username} />
		</div>
	);
}

export default ChatWindow;