import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import HttpProtocol from '../../components/HttpProtocol';
import UserItem from '../../components/UserItem';
import WebSocket from '../../components/WebSocket';

function Home({ socket }) {
    const [users, setUsers] = useState([]);

    const userLogged = JSON.parse(localStorage.getItem('userLogged'));

    useEffect(() => {
        socket.emit('users', userLogged);

        socket.on('users', (usersConnected) => {
            setUsers(usersConnected);
        });
    }, []);
    
    return (
        <>
            <Header />
            <div className="flex h-[calc(100vh_-_64px)]">
                {/* <div className="w-96 pt-4 shadow-md sm:w-0"></div> */}
                <div className="flex-1">
                    {userLogged &&
                        <HttpProtocol />
                    }
                    {userLogged &&
                        <WebSocket socket={socket}/>
                    }
                </div>
                {userLogged && (
                    <div className="w-96  bg-slate-200">
                        <div className="h-10 shadow-md text-center leading-10">Online</div>
                        {users !== [] && users.map((user, index) => <UserItem key={index} user={user} />)}
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;
