import Pedido from '../model/Pedido.ts'
import iRepositorioPedido from '../provider/iRepositorioPedido.ts'

export default class ListarPedidos {
    constructor(private readonly repo: iRepositorioPedido) {}

    async executar(): Promise<Pedido[]> {
        return await this.repo.listarTodos()
    }
}
