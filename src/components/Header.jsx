import { Link } from "react-router-dom";
import "./Header.css";


function Header(){
    return(
        <header>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to="/">Inicial</Link> 
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;