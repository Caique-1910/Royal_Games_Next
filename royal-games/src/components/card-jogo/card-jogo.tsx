import Link from "next/link";
import styles from "./card-jogo.module.css";
import { formatarPreco } from "@/utils/formatacao";
import { usePathname } from "next/navigation";

interface Jogo {
    jogoId: number,
    nome: string,
    preco: number,
    imagem: string,
    onDelete: (jogoId: number) => void,
    estaLogado: boolean
}

const CardJogo = ({ nome, preco, imagem, jogoId, onDelete, estaLogado }: Jogo) => {

    const pathname = usePathname();

    return (
        <article id={styles.card}>
            <img src={imagem} alt="" className={styles.img} />
            <h3>{nome}</h3>
            <p>{formatarPreco(preco)}</p>

            {
                pathname === '/jogo' && (
                    <div>
                        <Link href={"/jogo?id=" + jogoId}>
                        <button>Editar</button>
                        </Link>
                        <button onClick={() => onDelete(jogoId)}>Excluir</button>
                    </div>

                )
            }
            {
                pathname === "/home" && (
                    <Link href="/detalhe-jogo"><button className={styles.btnDetal}>Detalhes</button></Link>
                )
            }
            <Link href="/detalhe-jogo"><button className={styles.btnDetal}>Detalhes</button></Link>
        </article>
    )
}

export default CardJogo;