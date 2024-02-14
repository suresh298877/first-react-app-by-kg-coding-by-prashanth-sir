import { FaGrinHearts } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
const Header = ()=>{
    return <header>
    <div className="logo_container">
        <a href="#"><img className="myntra_home" src="../images/myntra_logo.webp" alt="Myntra Home" /></a>
    </div>
    <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
    </nav>
    <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input className="search_input" placeholder="Search for products, brands and more" />
    </div>
    <div className="action_bar">
        <div className="action_container">
            {/* <span className="material-symbols-outlined action_icon">person</span> */}
            <CgProfile />
            <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
            {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
            <FaGrinHearts />
            <span className="action_name">Wishlist</span>
        </div>

        <div className="action_container">
            {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
            <FaCartShopping />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
        </div>
    </div>
</header>
}

export default Header;