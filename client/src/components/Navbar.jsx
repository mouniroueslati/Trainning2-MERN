import { Link } from "react-router-dom";
import '../Styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/search">SEARCH</Link>
        <Link to="/add">ADD</Link>
    </nav>
  )
}

export default Navbar