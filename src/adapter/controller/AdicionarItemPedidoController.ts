import Pedido from '../../core/pedidoPRO/model/Pedido'
import AdicionarItemPedido from '../../core/pedidoPRO/service/AdicionarItemPedido'
import Produto from '../../core/produto/model/Produto'
import Quantidade from '../../core/shared/Quantidade'
import Conversor from '../../core/standards/Conversor'
import Usuario from '../../core/usuario/model/Usuario'
import ItemPedido from '../../core/pedidoPRO/model/ItemPedido'
import PedidoDTO from '../dto/PedidoDTO'
import ProdutoDTO from '../dto/ProdutoDTO'
import UsuarioDTO from '../dto/UsuarioDTO'

type Entrada = {
    pedido: PedidoDTO
    produto: ProdutoDTO
    quantidade: number
    cliente: UsuarioDTO
}

export default class AdicionarItemPedidoController {
    async executar(entrada: Entrada): Promise<PedidoDTO> {
        const conversorEntrada: Conversor<Entrada, any> = {
            converter(entrada: Entrada) {
                return {
                    pedido: entrada.pedido ? new Pedido(entrada.pedido) : undefined,
                    cliente: new Usuario(entrada.cliente),
                    item: ItemPedido.novo(
                        new Produto(entrada.produto),
                        new Quantidade(entrada.quantidade)
                    ),
                }
            },
        }
        const conversorSaida: Conversor<Pedido, PedidoDTO> = {
            converter(pedido: Pedido) {
                return {
                    ...pedido.props,
                    valorTotalFormatado: pedido.valorTotal.formatado(),
                    itens: pedido.itens.map((item) => ({
                        ...item.props,
                        valorTotalFormatado: item.valorTotal.formatado(),
                    })),
                } as PedidoDTO
            },
        }

        const casoDeUso = new AdicionarItemPedido(conversorEntrada, conversorSaida)

        return casoDeUso.executar(entrada)
    }
}
