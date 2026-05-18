import { erro } from "@/utils/toast"
import Jogo from "../jogo"
import {api} from "./api"


type JogoFormulario = {
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    plataformasId: number[]
    generosId: number[],
    classificacaoId: number
}

interface JogoListagem{
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    plataformasId: number[]
    generosId: number[],
    classificacaoId: number,
    statusJogo: boolean,
    imagemUrl: string
}


export async function  cadastrarJogo(dados:JogoFormulario) {
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome)
        formData.append("descricao", dados.descricao)
        formData.append("preco", dados.preco)

        if(dados.imagem) {
            formData.append("imagem", dados.imagem)
        }

        dados.generosId.forEach((id) => {
            formData.append("generosId", id.toString())
        })

        dados.plataformasId.forEach((id) => {
            formData.append("plataformasId", id.toString())
        })

        await api.post("Jogo", formData);
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}


export async function listarJogo() {
    try{
        const response = await api.get("Jogo");

        const ativos = response.data.filter(
            (jogo: JogoListagem) => jogo.statusJogo === true
        )

        const jogos = ativos.map((jogo: JogoListagem)=>
        ({
            ...jogo,
            imagemUrl: `${api.defaults.baseURL}${jogo.imagemUrl}`
        })
        );

        return jogos;
    }
    catch(error: any){
        throw new Error(error.response.data)
    }
}


export async function listarPorId(id:number) {
    try{
        const response = await api.get("Jogo/" + id)

        const jogo = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        }

        return jogo;
    }
    catch(error:any){
        throw new Error(error.response.data)
    }
}


export async function excluirJogo(id: number) {
    try{
        await api.delete("Jogo/" + id)
    }
    catch(error: any){
        throw new Error(error.response.data)
    }
}

export async function editarJogo(jogoId: number, dados:JogoListagem) {
    try {
        const formData = new FormData();

         formData.append("nome", dados.nome)
        formData.append("descricao", dados.descricao)
        formData.append("preco", dados.preco)

        if(dados.imagem) {
            formData.append("imagem", dados.imagem)
        }

        dados.generosId.forEach((id) => {
            formData.append("generosId", id.toString())
        })

        dados.plataformasId.forEach((id) => {
            formData.append("plataformasId", id.toString())
        })

        await api.put("Jogo/" + jogoId, formData);        


    } catch (error: any) {
        throw new Error(error.response.data)
    }
}
