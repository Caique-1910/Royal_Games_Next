import styles from "./footer.module.css";

const Footer = () => {



    return (
       <footer id={styles.footer}>
             <img src="../imgs/LogoHeader.png" alt="" />
            
            <ul className={styles.lista}>
                <li>royalgames@gmail.com</li>
                <li>(11) 99999-9999</li>
                <li>@RoyalGames</li>
            </ul>
       </footer>
    )
}

export default Footer;