import iCasoDeUso from '../../standards/iCasoDeUso.ts'
import Pedido from '../model/Pedido.ts'
import iRepositorioPedido from '../provider/iRepositorioPedido.ts'

export default class CadastrarPedido implements iCasoDeUso<Pedido, void> {
    constructor(private readonly repo: iRepositorioPedido) {}

    async executar(pedido: Pedido): Promise<void> {
        return await this.repo.cadastrar(pedido)
    }
}
