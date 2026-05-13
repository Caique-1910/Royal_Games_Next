import Link from "next/link";
import styles from "./card-jogo.module.css";

const CardJogo = () => {
        return(
            <article id={styles.card}>
                <img src="../imgs/Rectangle16.png" alt="" className={styles.img}/>
                <h3>Lol</h3>
                <p>R$70,00</p>
                <Link href ="/detalhe-jogo"><button className={styles.btnDetal}>Detalhes</button></Link>
            </article>
        )
}

export default CardJogo;