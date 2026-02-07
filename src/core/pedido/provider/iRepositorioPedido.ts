import ItensPedido from '../model/ItemPedido.ts'
import Pedido from '../model/Pedido.ts'

export default interface iRepositorioPedido {
    cadastrar(pedido: Pedido): Promise<void>
    listarTodos(): Promise<Pedido[]>
    buscarPorId(id: string): Promise<Pedido | null>
}
