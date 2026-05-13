import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./detalhe-jogo.module.css"

const DetalheJogo = () => {
    return(
        <>
        <Header/>
        <main>
            <div id={styles.conteudo}>
                Detealhes do jogo
                <hr></hr>

                <div className={styles.superior}>
                    <img src="../imgs/Group10.png" alt="" />

                    <div>
                        <h2>Lol</h2>

                        <p>
                            League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.
                        </p>
                    </div>
                </div>

                <div className={styles.inferior}>
                    <div className={styles.esquerda}>

                       <div>
                        <h2>Classificação Indicativa:</h2>
                        <p>18 anos</p>
                       </div>

                       <div>
                        <h2>Preço:</h2>
                        <p></p>
                       </div>

                       <div>
                        <h2>Plataformas:</h2>
                        <ul><li>xbox</li></ul>
                       </div>
                    </div>
                    <div className={styles.direita}>
                        <div>
                            <h2>Categorias</h2>
                            <ul> <li></li></ul>
                        </div>
                        <div>
                            <h2>Gêneros</h2>
                            <ul><li></li></ul>
                        </div>
                    </div>
                </div>
            </div>
              
             
           
        </main>
        <Footer/>
        </>
    )
}


export default DetalheJogo;