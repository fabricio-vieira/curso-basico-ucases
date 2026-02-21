// import RepositorioPedidoMemoria from '../../db/RepositorioPedidoMem'
// import RepositorioProdutoMemoria from '../../db/RepositorioProdutoMemoria'
// import Terminal from '../util/Terminal'
// import CadastrarPedido from '../../../core/pedido/service/CadastrarPedido'
// import Pedido from '../../../core/pedidoPRO/model/Pedido'
// import Session from '../util/Sessao'

// import agruparItens from './helpers/agruparItens'
// import indexarProdutos from './helpers/indexarProdutos'
// import montarItensPedido from './helpers/montarItensPedido'
// import selecionarItens from './helpers/selecionarItens'
// import menuItensPedido from './helpers/menuItensPedido'

// export default async function gerarPedido() {
//     const usuario = Session.usuario
//     Terminal.titulo(`Faça seu Pedido ${usuario?.nome.abreviacao || ''}`)

//     const repoProduto = RepositorioProdutoMemoria.instance
//     const repoPedido = RepositorioPedidoMemoria.instance
//     const casoDeUso = new CadastrarPedido(repoPedido)

//     const produtos = await repoProduto.listarTodos()
//     const produtosPorId = indexarProdutos(produtos)
//     const menuItens = menuItensPedido(produtos)

//     const itensSelecionados = await selecionarItens(menuItens)

//     if (itensSelecionados.length === 0) {
//         Terminal.erro('Nenhum item foi adicionado ao pedido.')
//         return
//     }
//     const itensAgrupadosPorQtde = agruparItens(itensSelecionados)
//     const itensPedido = montarItensPedido(itensAgrupadosPorQtde, produtosPorId)

//     try {
//         const pedido = new Pedido({ usuario: Session.usuario!.props, itens: itensPedido })
//         await casoDeUso.executar(pedido)
//         console.log(pedido)
//         Terminal.sucesso('Pedido gerado com sucesso!')
//     } catch (error: any) {
//         Terminal.erro(error.message)
//         return
//     } finally {
//         await Terminal.esperarEnter()
//     }
// }
