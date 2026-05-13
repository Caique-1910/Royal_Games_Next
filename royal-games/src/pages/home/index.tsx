import Header from "@/components/header/header";
import styles from "./home.module.css"
import Footer from "@/components/footer/footer";
import Listagem from "@/components/listagem/listagem";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section id={styles.banner}>
                    <div className={styles.textos_banner}>
                        <h2>Conheça nossos jogos!</h2>
                        <p>
                            Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.
                        </p>
                    </div>
                    <img src="../imgs/ImagemBanner.png" alt="" />
                </section>

                <section className={styles.catalogo} id={styles.catalogo}>
                    <div className={styles.cardsCat}>
                        <h2>Catálogo de jogos</h2>
                        <hr className={styles.linha1}></hr>
                        <div className={styles.cardsCat}>

                        <Listagem />
                        </div>
                    </div>
                </section>

                <section id={styles.curiosidade}>
                    <h2>Jogos online podem afetar o comportamento humano?</h2>
                    <hr className={styles.linha2}></hr>

                    <div className={styles.div_imgs}>
                        <img src="../imgs/Group10.png" alt="" />
                        <img src="../imgs/csgo.png" alt="" />
                    </div>


                    <div className={styles.div_textos}>  <p> Estudos indicam que jogos podem alterar o comportamento humano…</p> <b></b>
                        <p>Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;