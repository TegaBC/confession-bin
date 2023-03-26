import Styles from "../styles/Navbar.module.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (<nav className={Styles.nav}>
        <Link to="/" className={Styles.name}>ConfessionBin</Link>

        <a href="">
        <i className="bi bi-plus-lg"></i>
        </a>
    </nav>)
}