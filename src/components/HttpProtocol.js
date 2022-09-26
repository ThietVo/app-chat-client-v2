import axios from 'axios';
import { useEffect, useState } from 'react';

function HttpProtocol() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));
    useEffect(() => {
        const type = 'http';
        const interval = setInterval(() => {
          axios
                .get(`http://127.0.0.1:5001/messages/${type}`)
                .then((res) => {
                    // console.log(res.data);
                    setMessages(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
      
        return () => clearInterval(interval);
      }, []);

    const handleSendMessage = () => {
        if(message){
            const dataRequest = {
                message: message,
                type: 'http',
                userId: userLogged.id
            }
            axios
                .post(`http://127.0.0.1:5001/messages/`, dataRequest)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            
            setMessage('')
        }
    };

    return ( 
        <div className="w-3/5 m-auto mt-20">
            <div className="text-center mb-3 text-2xl">HTTP PROTOCOL</div>
            <div className="h-[300px] w-full flex flex-col mx-3 bg-slate-100">
                    <div className="flex-1 overflow-hidden overflow-y-scroll">
                        <ul>
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

export default HttpProtocol;