import Link from "next/link";
import styles from "./sub-header.module.css";

const SubHeader = () => {



    return (
        <header id={styles.subheader}>
            <img src="../imgs/LogoHeader.png" alt="" />

            <nav className={styles.nav}>
                <Link href="/jogo">Cadastrar jogo</Link>
                <Link href="/login"><button className={styles.botao}>Login</button></Link>
            </nav>
        </header>
    )
}

export default SubHeader;