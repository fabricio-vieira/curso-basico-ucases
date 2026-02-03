import Terminal from '../util/Terminal'
import RepositorioProdutoMemoria from '../../db/RepositorioProdutoMemoria'
import ObterProdutos from '../../../core/produto/service/ObterProdutos'

export default async function listarProdutos() {
    Terminal.titulo('Listar Usuários')

    try {
        const repositorioProduto = RepositorioProdutoMemoria.instance // Muda o jeito de instanciar o repo (comum: new Reposit())
        const casoDeUso = new ObterProdutos(repositorioProduto)
        const usuarios = await casoDeUso.executar()
        Terminal.sucesso(`Abaixo relação de Produtos`)
        Terminal.tabel(
            usuarios.map((prod) => ({
                id: prod.id.valor,
                nome: prod.nome.completo,
                preco: prod.preco.formatado(),
            }))
        )
    } catch (error: any) {
        Terminal.erro(error.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
