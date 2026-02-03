import Produto from '../model/Produto'

export default interface iRepositorioProduto {
    salvar(usuario: Produto): Promise<void>
    listarTodos(): Promise<Produto[]>
    buscarPorId(id: string): Promise<Produto | null>
}
