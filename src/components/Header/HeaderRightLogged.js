import { Link } from "react-router-dom";

function HeaderRightLogged() {
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));

    return ( 
        <div className="flex align-">
            <div className="p-2 ">{userLogged.username}</div>
            <Link to={'/logout'} className="p-2 cursor-pointer">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </Link>
        </div>
     );
}

export default HeaderRightLogged;