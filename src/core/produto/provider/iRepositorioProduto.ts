import Produto from '../model/Produto'

export default interface iRepositorioProduto {
    salvar(produto: Produto): Promise<void>
    listarTodos(): Promise<Produto[]>
    buscarPorId(id: string): Promise<Produto | null>
}
