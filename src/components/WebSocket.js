import axios from 'axios';
import { useEffect, useState } from 'react';

function WebSocket({ socket }) {
    const [message, setMessage] = useState('');
    const [oldMessages, setOldMessages] = useState([]);
    const [messages, setMessages] = useState([]);
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));

    useEffect(() => {
        const type = 'socket';
        axios
            .get(`http://127.0.0.1:5001/messages/${type}`)
            .then((res) => {
                // console.log(res.data);
                setOldMessages(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        socket.on('data', (data) => {
            setMessages([...messages, data.data]);
        });
    }, [socket, messages]);

    const handleSendMessage = () => {
        if (!message) {
            return;
        }
        const data = {
            username: userLogged.username,
            message: message,
        };
        socket.emit('data', data);
        setMessage('');

        const dataRequest = {
            message: message,
            type: 'socket',
            userId: userLogged.id,
        };
        axios
            .post(`http://127.0.0.1:5001/messages/`, dataRequest)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-3/5 m-auto mt-20">
            <div className="text-center mb-3 text-2xl">WEBSOCKET</div>
            <div className="h-[300px] w-full flex flex-col mx-3 bg-slate-100">
                <div className="flex-1 overflow-hidden overflow-y-scroll">
                    <ul>
                        {oldMessages.map((message, ind) => {
                            return (
                                <li key={ind}>
                                    {message?.username}: {message?.message}
                                </li>
                            );
                        })}
                        {messages.map((message, ind) => {
                            return (
                                <li key={ind}>
                                    {message?.username}: {message?.message}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="h-8 w-full flex">
                    <input
                        className="w-3/4 mr-3 bg-slate-200"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></input>
                    <div className="cursor-pointer flex-1 bg-slate-400" onClick={handleSendMessage}>
                        Send
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebSocket;
