import CasoDeUso from '../../standards/iCasoDeUso'
import Conversor from '../../standards/Conversor'
import ItemPedido from '../model/ItemPedido'
import Pedido from '../model/Pedido'
import Usuario from '../../usuario/model/Usuario'

export type Entrada = {
    pedido?: Pedido
    item: ItemPedido
    cliente: Usuario
}

export default class AdicionarItemPedido implements CasoDeUso<any, any> {
    constructor(
        private readonly conversorEntrada: Conversor<any, Entrada>,
        private readonly conversorSaida: Conversor<Pedido, any>
    ) {}

    async executar(entrada: any): Promise<any> {
        const { pedido, cliente, item } = this.conversorEntrada.converter(entrada)

        if (!cliente) throw new Error('Cliente não informado')
        if (!pedido) {
            return this.conversorSaida.converter(Pedido.novo(cliente, item))
        }

        if (pedido.cliente.id.diferente(cliente.id)) {
            throw new Error('Cliente diferente do pedido')
        }

        return this.conversorSaida.converter(pedido.adicionarItem(item))
    }
}
