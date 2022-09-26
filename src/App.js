import { useEffect } from 'react';
import io from 'socket.io-client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

const socket = io('localhost:5001/', {
    transports: ['websocket'],
    cors: {
        origin: 'http://localhost:3000/',
    },
});

socket.on('connect', (data) => {
    // console.log(data);
});

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home socket={socket}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout socket={socket}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
