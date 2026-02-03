import Produto from '../../../core/produto/model/Produto'
import RepositorioProdutoMemoria from '../../db/RepositorioProdutoMemoria'
import CadastrarProduto from '../../../core/produto/service/CadastrarProduto'
import Terminal from '../util/Terminal'

export default async function cadastrarProduto() {
    Terminal.titulo('Cadastrar Produtos')

    const nome = await Terminal.campoRequerido('nome_produto:')
    const preco = await Terminal.campoRequerido('preço:')
    Terminal.mostrarLogs()

    try {
        const repositorio = RepositorioProdutoMemoria.instance
        const casoDeUso = new CadastrarProduto(repositorio)
        await casoDeUso.executar(new Produto({ nome, preco: Number(preco) }))

        Terminal.sucesso('Produto cadastrado com sucesso')
    } catch (error: any) {
        Terminal.erro(error.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
