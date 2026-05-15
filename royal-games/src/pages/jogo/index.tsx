import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./jogo.module.css"
import Listagem from "@/components/listagem/listagem";

const Jogo = () => {
    return (
        <>
            <SubHeader />
            <main id={styles.main}>
                <section className={styles.formulario}>
                    <div className={styles.div_title_form}>
                        <h2>Cadastrar novo jogo</h2>
                        <hr className={styles.linha1}></hr>
                    </div>

                    <div className={styles.div_forms}>
                        <form action="" className={styles.forms}>
                            <div className={styles.div_interna_form}>

                                <div className={styles.esquerda_form}>
                                    <div className={styles.div_sup_form}>
                                        <div className={styles.camp_nome}>
                                            <label htmlFor="">Nome:</label>
                                            <input className={styles.input_nome} type="text" />
                                        </div>
                                    </div>

                                    <div className={styles.div_mid_form}>
                                        <div className={styles.camp_valor}>
                                            <label htmlFor="">Valor:</label>
                                            <input className={styles.input_valor} type="text" />
                                        </div>

                                        <div className={styles.camp_genero}>
                                            <label htmlFor="">Gênero:</label>
                                            <select className={styles.input_genero}name="" id="">
                                                <option value=""></option>
                                            </select>
                                        </div>

                                        <div className={styles.camp_classi}>
                                            <label htmlFor="">Classificação Indicativa:</label>
                                            <select className={styles.input_classi} name="" id="">
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <div className={styles.div_inf_form}>
                                            <div className={styles.camp_plata}>
                                                <label htmlFor="">Platarforma:</label>
                                                <select className={styles.input_plata} name="" id="">
                                                    <option value=""></option>
                                                </select>
                                            </div>

                                            <div className={styles.camp_img}>
                                                <label htmlFor="">Imagem:</label>
                                                <input className={styles.input_img} type="file" />
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className={styles.direita_form}>
                                    <div className={styles.camp_descri}>
                                        <label htmlFor="">Descrição:</label>
                                        <textarea className={styles.textarea} name="" id=""></textarea>
                                    </div>
                                </div>

                            </div>
                            
                            <div className={styles.div_btn}>
                                <button className={styles.btn} type="submit">Cadastrar</button>
                            </div>

                        </form>
                    </div>
                </section>

                <section className={styles.lista} id={styles.lista}>
                    
                    <div id={styles.cardsCat}>
                        <div className={styles.titulo_lista}>
                        <h2>Lista de Jogos</h2>
                        <hr className={styles.linha2}></hr>
                        </div>

                        <div className={styles.cardCat}>
                            <Listagem />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Jogo;