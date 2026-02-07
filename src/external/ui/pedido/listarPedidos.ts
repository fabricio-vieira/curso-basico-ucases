import Terminal from '../util/Terminal'
import ListarPedidos from '../../../core/pedido/service/ListarPedidos'
import RepositorioPedidoMemoria from '../../db/RepositorioPedidoMem'

export default async function listarPedidos() {
    Terminal.titulo('Listar Pedidos')

    try {
        const repoPedidoMem = RepositorioPedidoMemoria.instance // Muda o jeito de instanciar o repo (comum: new Reposit())
        const casoDeUso = new ListarPedidos(repoPedidoMem)
        const pedidos = await casoDeUso.executar()
        Terminal.sucesso(`Abaixo relação de Pedidos`)
        Terminal.tabel(
            pedidos.map((p) => ({
                id: p.id.valor,
                produto: p.itens.map((i) => `${i.nomeProduto}`),
                quantidade: p.itens.map((i) => i.quantidade),
                valor: p.itens.map((i) => i.precoUnitario),
                total: p.itens.map((i) => i.precoTotal),
            }))
        )
    } catch (error: any) {
        Terminal.erro(error.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
