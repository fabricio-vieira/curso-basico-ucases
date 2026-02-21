import Pedido from '../model/Pedido'

export default interface iRepositorioPedido {
    salvar(pedido: Pedido): Promise<void>
    listarTodos(): Promise<Pedido[]>
    buscarPorId(id: string): Promise<Pedido | null>
}
