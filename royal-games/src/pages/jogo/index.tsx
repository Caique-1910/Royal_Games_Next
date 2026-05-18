import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header";
import styles from "./jogo.module.css"
import Listagem from "@/components/listagem/listagem";
import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { listarGenero } from "../api/generoService";
import { listarPlataforma } from "../api/plataformaService";
import { cadastrarJogo, editarJogo, listarPorId } from "../api/jogoService";
import { erro, notificacao } from "@/utils/toast";
import { verificarAutenticacao } from "@/utils/auth";

interface Genero {
    generoId: number,
    nome: string
}
interface Platarforma {
    plataformaId: number,
    nome: string
}

const Jogo = () => {

    const [generos, setGenero] = useState<Genero[]>([]);
    const [plataformas, setPlataforma] = useState<Platarforma[]>([]);

    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [generosSelecionados, setgenerosSelecionados] = useState<number[]>([]);
    const [plataformasSelecionadas, setplataformasSelecionadas] = useState<number[]>([]);

    const [estaAutenticado, setEstaAutenticado] = useState(false);



    const router = useRouter();
    const id = router.query.id;

    let edicao = id ? true : false

    async function listarGenerosEmJogos() {
        const lista = await listarGenero();
        setGenero(lista.data);
    }

    async function listarPlataformasEmJogos() {
        const lista = await listarPlataforma();
        setGenero(lista.data);
    }

    async function carregarInformacoes() {
        if (!id) return
        const jogo = await listarPorId(Number(id));
        setNome(jogo.nome);
        setDescricao(jogo.descricao);
        setPreco(jogo.preco);
        setgenerosSelecionados(jogo.generosIds);
        setplataformasSelecionadas(jogo.plataformasIds);
    }

    async function salvarJogo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const dados = {
                nome,
                descricao,
                preco,
                imagem,
                generosIds: generosSelecionados,
                plataformasIds: plataformasSelecionadas
            }

            if (edicao) {
                await editarJogo(Number(id), dados)
                notificacao("Jogo editado.")
            }
            else {
                await cadastrarJogo(dados)
                notificacao("Jogo cadastrado");
            }
        }
        catch (error: any) {
            erro(error.message)
        }
    }

    useEffect(() => {

        if (!router.isReady) return;

        if (!verificarAutenticacao()) {
            router.push("/home");
        }
        setEstaAutenticado(true);
        carregarInformacoes();
        listarGenerosEmJogos();
        listarPlataformasEmJogos();
    }, [router.isReady, id])

    if (!estaAutenticado) {
        return null;
    }

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
                        <form action="" className={styles.forms} onSubmit={salvarJogo}>
                            <div className={styles.div_interna_form}>

                                <div className={styles.esquerda_form}>
                                    <div className={styles.div_sup_form}>
                                        <div className={styles.camp_nome}>
                                            <label htmlFor="">Nome:</label>
                                            <input value={nome} onChange={(e) => setNome(e.target.value)} className={styles.input_nome} type="text" />
                                        </div>
                                    </div>

                                    <div className={styles.div_mid_form}>
                                        <div className={styles.camp_valor}>
                                            <label htmlFor="">Valor:</label>
                                            <input value={preco} onChange={(e) => setPreco(e.target.value)} className={styles.input_valor} type="text" />
                                        </div>

                                        <div className={styles.camp_genero}>
                                            <label htmlFor="">Gênero:</label>
                                            <select className={styles.input_genero} multiple
                                                value={generosSelecionados.map(String)}
                                                onChange={(e) => setgenerosSelecionados(
                                                    Array.from(e.target.selectedOptions).map((option) => Number(option.value))
                                                )}>
                                                {generos.map((item) => (
                                                    <option value={item.generoId} key={item.generoId}>
                                                        {item.nome}
                                                    </option>))}
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