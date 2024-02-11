import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="nav">
            <Link to='/'>
                <div>Cheese App bro</div>
            </Link>
        </nav>
    )
}

export default Header