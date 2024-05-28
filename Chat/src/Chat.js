import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Load messages from localStorage
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        setMessages(savedMessages);
    }, []);

    useEffect(() => {
        const handleBeforeUnload = () => {
            // Clear messages on page exit
            localStorage.removeItem('chatMessages');
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const sendMessage = async (message) => {
        const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        return data;
    };

    

    useEffect(() => {
        // Trigger the bot's message when the component mounts
        const sendInitialMessage = async () => {
            const botMessage = { sender: 'Byte', text: 'Hello, I am Byte. How can I assist you today?' };
            appendMessage(botMessage);
        };
        sendInitialMessage();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input) {
            const userMessage = { sender: 'User', text: input };
            appendMessage(userMessage);
            setInput('');
    
            // Check if the chat is empty
            if (messages.length === 0) {
                // Hardcoded message from the bot
                const botMessage = { sender: 'Byte', text: 'Hello, I am Byte. How can I assist you today?' };
                appendMessage(botMessage);
            } else {
                // Otherwise, send the user's message to the Rasa server
                const responses = await sendMessage(input);
                responses.forEach(response => {
                    const botMessage = { sender: 'Byte', text: response.text };
                    appendMessage(botMessage);
                });
            }
        }
    };

    const appendMessage = (message) => {
        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages, message];
            localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
            return updatedMessages;
        });
    };

    return (
        <div>
            <header>
                <nav>
                    <ul className="navUl">
                        <li><a href="http://localhost:3000/">Home</a></li>
                        <li><a href="http://localhost:3001/">Inventory</a></li>
                        <li><a href="http://localhost:3004/">Chat</a></li>
                        <li style={{ float: 'right' }}><a href="http://localhost:3006/">Profile</a></li>
                        <li style={{ float: 'right' }}><a href="http://localhost:3002/">Cart</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="chatContainer">
                <div className="messages" id="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender === 'Byte' ? 'byteMessage' : ''}>
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <form className="messageForm" onSubmit={handleSubmit}>
                        <input
                            className="messageInput"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message"
                            required
                        />
                        <button className="sendButton" type="submit">Send</button>
                    </form>
                </div>
            </main>
        </div>
      );
};



export default Chat;