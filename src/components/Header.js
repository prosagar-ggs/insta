import React from "react";
import "./Header.css";
import { FaHome, FaFacebookMessenger, FaCompass, FaRegPlusSquare, FaRegHeart} from "react-icons/fa";


const Header = () => {
    return (
        
    <div class="header">
        <h1>Instagram</h1>
        <input type="text" className="search-box" placeholder="search"/>
        <div className="header-items">
            <i><FaHome/></i>
            <i><FaFacebookMessenger/></i>
            <i><FaRegPlusSquare/></i>
            <i><FaCompass/></i>
            <i><FaRegHeart/></i>
        </div>
    </div>
    


    )
}
export default Header