import Carrinho from '../util/Carrinho'
import FinalizarPedidoController from '../../../adapter/controller/FinalizarPedidoController'
import RepositorioPedidoMem from '../../db/RepositorioPedidoMem'
import Terminal from '../util/Terminal'

export default async function finalizarPedido() {
    Terminal.titulo('Finalizar Pedido')
    if (!Carrinho.pedido) return

    const pedido = Carrinho.pedido

    Terminal.sucesso(`Id: ${pedido.id}`)
    Terminal.sucesso(`Cliente: ${pedido.cliente!.nome}`)
    Terminal.sucesso(`Valor: ${pedido.valorTotalFormatado}`)
    Terminal.sucesso(`Status: ${pedido.status}`)
    Terminal.tabela(
        pedido.itens.map((item) => {
            return {
                nome: item.produto!.nome,
                quantidade: item.quantidade,
                valor: item.valorFormatado,
            }
        })
    )

    const confirmacao = await Terminal.confirmacao('Deseja finalizar o pedido?')
    if (!confirmacao) return
    try {
        const repo = RepositorioPedidoMem.instance
        const ctrl = new FinalizarPedidoController(repo)
        await ctrl.executar(pedido)
        Carrinho.limpar()
        Terminal.sucesso('Pedido finalizado com sucesso!')
    } catch (e: any) {
        Terminal.erro(e.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
