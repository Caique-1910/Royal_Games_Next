import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {



    return (
        <header id={styles.header}>
            <img src="../imgs/LogoHeader.png" alt="" />

            <nav className={styles.nav}>
                <Link href="">Catálogo</Link>
                <Link href="">Login</Link>
            </nav>
        </header>
    )
}

export default Header;