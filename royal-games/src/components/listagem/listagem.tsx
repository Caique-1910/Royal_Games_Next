import { useState } from "react"
import CardJogo from "../card-jogo/card-jogo"
import styles from "./listagem.module.css"
import { useRouter } from "next/router"
import {erro, notificacao, toastConfirmarExclusao} from "@/utils/toast"
import { excluirJogo, listarJogo } from "@/pages/api/jogoService"

interface Jogo {
    jogoId: number
    nome: string,
    preco: number,
    descricao: string,
    imagemUrl: string,
    statusJogo: boolean
}





const Listagem = () => {

    const [jogos, setJogos] = useState<Jogo[]>([]);
    const [ordem, setOrdem] = useState("todos");
    const [pesquisa, setPesquisa] = useState("");
    const [estaAutenticado, setEstaAutenticado] = useState(false)

    const router = useRouter();
    const id = router.query.id;

    let cadastro = id ? true : false;
    let editar = id ? true : false

    function confirmarExclusao(jogoId: number) {
        toastConfirmarExclusao(async () => {
            try {
                await excluirJogo(jogoId);
                setJogos((listaAtual) =>
                    listaAtual.map((jogo) =>
                        jogo.jogoId === jogoId
                            ? { ...jogo, statusProduto: false }
                            : jogo
                    )
                )
                notificacao("Produto inatividado");
                listarJogo();
            } catch (error: any) {
                erro(error.message);
            }
        })
    }



    const jogosfiltrados = jogos.filter((jogo) =>
        jogo.nome.toLowerCase().includes(pesquisa.toLowerCase())).sort((a, b) => {
            if (ordem === "menor_valor") {
                return a.preco - b.preco;
            } else if (ordem === "maior_valor") {
                return b.preco - a.preco
            }
            return 0;
        });

    return (
        <>
            <div id={styles.filtragem}>
                <div className={styles.div_filtros}>
                    <input type="text" placeholder="Pesquise..." />

                    <div className={styles.filtros}>
                        <select name="" id="">
                            <option value="todos">Todos</option>
                            <option value="menor_valor">Maior Preço</option>
                            <option value="maior_valor">Menor Preço</option>
                        </select>

                        <select name="" id="">
                            <option value="">Categoria</option>
                        </select>
                    </div>

                </div>

                <div className={styles.div_cards}>
                    {jogosfiltrados.length > 0 ? jogosfiltrados.map((item) =>
                        <CardJogo
                            key={item.jogoId}
                            jogoId={item.jogoId}
                            nome={item.nome}
                            preco={item.preco}
                            imagem={item.imagemUrl}
                            onDelete={confirmarExclusao}
                            estaLogado={estaAutenticado}
                        />
                     ) : (
                     <p className={styles.paragrafoCarregar}>Carregando jogo</p>
                )}

                </div>
            </div>
        </>
    )
}

export default Listagem