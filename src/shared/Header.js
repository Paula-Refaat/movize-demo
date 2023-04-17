import "../style/Header.css";
import image from "../assets/images/images.png";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <header className='main-header'>
            <div className='logo'>
                <img src={image} alt="logo"></img>
            </div>
            <nav>
                <ul>
                <li> 
                    {/* link --> عشان ميعملش refresh للصفحة */}
                    <Link to={'/'}> Home </Link> 
                </li>
                <li>
                    <Link to={'/about'}> About </Link>
                </li>
                <li>
                    <Link to={'/contact'}> Contact </Link>
                </li>
                <li>
                    <a>Login</a>
                </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;