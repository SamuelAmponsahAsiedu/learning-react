import { LOGO_URL } from "../utils/constants";  
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg m-2'>
            <div className='logo-container'>
            <img className='w-40 p-2 ' 
            src= {LOGO_URL}
            />
            </div>
            <div className='flex items-center'>
            <ul className="flex">
                <li className="px-4">
                    OnlineStatus: {onlineStatus ?  "👍🏽" : "😴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                <Link to="/about">About US</Link>
                </li>
                <li className="px-4">
                <Link to="/contact">Contact US</Link>
                </li>
                <li className="px-4">Cart</li>
                <button className="login" onClick={() => {
                    btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login");
                }} >{btnNameReact}</button>
            </ul>
            </div>

        </div>
    )
}

export default Header;