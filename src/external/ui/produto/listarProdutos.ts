import Terminal from '../util/Terminal'
import RepositorioProdutoMemoria from '../../db/RepositorioProdutoMemoria'
import ObterProdutos from '../../../core/produto/service/ObterProdutos'
import ObterProdutosController from '../../../adapter/controller/ObterProdutosController'

export default async function listarProdutos() {
    Terminal.titulo('Listar Produtos')

    try {
        const repositorioProduto = RepositorioProdutoMemoria.instance // Muda o jeito de instanciar o repo (comum: new Reposit())
        const controller = new ObterProdutosController(repositorioProduto)
        const produtos = await controller.executar()
        Terminal.sucesso(`Abaixo relação de Produtos`)
        Terminal.tabel(produtos)
    } catch (error: any) {
        Terminal.erro(error.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
