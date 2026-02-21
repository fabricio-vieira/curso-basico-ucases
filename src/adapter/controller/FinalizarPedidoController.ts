import Conversor from '../../core/standards/Conversor'
import FinalizarPedido from '../../core/pedidoPRO/service/FinalizarPedido'
import Pedido from '../../core/pedidoPRO/model/Pedido'
import PedidoDTO from '../dto/PedidoDTO'
import RepositorioPedido from '../../core/pedidoPRO/provider/iRepositorioPedidoPRO'

export default class FinalizarPedidoController {
    constructor(private readonly repo: RepositorioPedido) {}

    async executar(pedido: PedidoDTO): Promise<void> {
        const conversorEntrada: Conversor<PedidoDTO, Pedido> = {
            converter(pedido: PedidoDTO) {
                return new Pedido(pedido)
            },
        }

        const casoDeUso = new FinalizarPedido(this.repo, conversorEntrada)
        return casoDeUso.executar(pedido)
    }
}
