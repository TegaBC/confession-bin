import Styles from "../styles/Navbar.module.css"

export default function NavBar() {
    return (<nav className={Styles.nav}>
        <span>ConfessionBin</span>

        <a href="">
        <i class="bi bi-plus-lg"></i>
        </a>
    </nav>)
}