import Header from "@/components/header/header";
import styles from "./home.module.css"
import Footer from "@/components/footer/footer";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div>
                        <h2>Conheça nossos jogos!</h2>
                        <p>
                            Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.
                        </p>
                    </div>
                    <img src="../imgs/ImagemBanner.png" alt="" />
                </section>

                <section>
                    <h2>Catalogo de jogos</h2>
                    <hr></hr>
                </section>

                <section>
                    <div>
                        <p>Jogos online podem afetar o comportamento humano?</p>
                        <hr></hr>
                        <img src="../imgs/Group10.png" alt="" />
                        <img src="../imgs/csgo.png" alt="" />
                        <p> Estudos indicam que jogos podem alterar o comportamento humano…</p> <b></b>
                        <p>Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;