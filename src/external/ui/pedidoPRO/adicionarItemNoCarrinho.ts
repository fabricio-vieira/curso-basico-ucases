import AdicionarItemPedidoController from '../../../adapter/controller/AdicionarItemPedidoController'
import ProdutoDTO from '../../../adapter/dto/ProdutoDTO'
import Terminal from '../util/Terminal'
import Sessao from '../util/Sessao'
import Carrinho from '../util/Carrinho'

export default async function adicionarItemNoCarrinho(produto: ProdutoDTO) {
    Terminal.titulo(`Produto ${produto.nome} - ${produto.precoFormatado}`)

    const confirmacao = await Terminal.confirmacao('Deseja adicionar o item no carrinho?')
    if (!confirmacao) return

    const quantidade = await Terminal.campoRequerido('Quantidade', {
        default: '1',
    })

    try {
        const ctrl = new AdicionarItemPedidoController()
        const pedidoAtualizado = await ctrl.executar({
            pedido: Carrinho.pedido!,
            produto,
            quantidade: +quantidade,
            cliente: Sessao.usuario!.props,
        })

        Carrinho.atualizar(pedidoAtualizado)
        Terminal.sucesso('Item adicionado no carrinho')
    } catch (e: any) {
        Terminal.erro(e.message)
    }
}
