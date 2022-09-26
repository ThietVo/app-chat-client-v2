import { Link } from 'react-router-dom';
import HeaderRightLogged from './HeaderRightLogged';

function Header() {
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));

    return (
        <div className="h-16 shadow-md">
            <div className="flex w-full h-full m-auto justify-between items-center px-20">
                <Link to={'/'} className="text-3xl font-bold text-blue-500">
                    CHAT APP
                </Link>
                {!userLogged ? (
                    <div className="flex text-blue-400">
                        <Link to={'/login'} className="p-3 cursor-pointer hover:text-sky-700 hover:underline ">
                            Sign in
                        </Link>
                        <Link to={'/register'} className="p-3 cursor-pointer hover:text-sky-700 hover:underline">
                            Sign up
                        </Link>
                    </div>
                ) : (
                    <HeaderRightLogged />
                )}
            </div>
        </div>
    );
}

export default Header;
