import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ socket }) {
    const navigate = useNavigate();
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));

    useEffect(() => {
        socket.emit('dis_connect', userLogged);

        localStorage.removeItem('userLogged');
        navigate('/');

        function cleanup() {
            socket.disconnect();
        }
    }, []);
    
    return <></>;
}

export default Logout;
