import Footer from "@/components/footer/footer";
import styles from "./detalhe-jogo.module.css"
import SubHeader from "@/components/sub-header/sub-header";

const DetalheJogo = () => {
    return (
        <>
           <SubHeader/> 
            <main>
                <div id={styles.conteudo}>
                    <div className={styles.div_info}>
                        <div className={styles.div_titulo}>
                            <h2>Detalhes do jogo</h2>
                            <hr className={styles.linha}></hr>
                        </div>


                        <div className={styles.superior}>
                            <img src="../imgs/Rectangle16.png" alt="" />

                            <div className={styles.div_sup_text}>
                                <h2>Lol</h2>

                                <p>
                                    League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.
                                </p>
                            </div>
                        </div>

                        <div className={styles.inferior}>
                            <div className={styles.esquerda}>

                                <div className={styles.camp_info}>
                                    <h2>Classificação Indicativa:</h2>
                                    <p>18 anos</p>
                                </div>

                                <div className={styles.camp_info}>
                                    <h2>Preço:</h2>
                                    <p>R$70,00</p>
                                </div>

                                <div className={styles.camp_info}>
                                    <h2>Plataformas:</h2>
                                    <ul><li>xbox</li></ul>
                                </div>
                            </div>
                            <div className={styles.direita}>
                                <div className={styles.camp_infoD}>
                                    <h2>Gêneros:</h2>
                                    <ul>
                                        <li>Ação</li>
                                        <li>Moba</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </main>
            <Footer />
        </>
    )
}


export default DetalheJogo;