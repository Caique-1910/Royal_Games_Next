import CardJogo from "../card-jogo/card-jogo"
import styles from "./listagem.module.css"

const Listagem = () => {
    return (
        <>
            <div id={styles.filtragem}>
                <div className={styles.div_filtros}>
                    <input type="text"  placeholder="Pesquise..."/>

                    <div className={styles.filtros}> 
                        <select name="" id="">
                        <option value="">Todos</option>
                        <option value="">Maior Preço</option>
                        <option value="">Menor Preço</option>
                    </select>

                        <select name="" id="">
                            <option value="">Categoria</option>
                        </select>
                    </div>

                </div>

                <div className={styles.div_cards}>
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                </div>
            </div>
        </>
    )
}

export default Listagem