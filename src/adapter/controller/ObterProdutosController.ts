import iRepositorioProduto from '../../core/produto/provider/iRepositorioProduto'
import ProdutoDTO from '../dto/ProdutoDTO'
import ObterProdutos from '../../core/produto/service/ObterProdutos'

export default class ObterProdutoController {
    constructor(private readonly repo: iRepositorioProduto) {}

    async executar(): Promise<ProdutoDTO[]> {
        const casoDeUso = new ObterProdutos(this.repo)
        const produtos = await casoDeUso.executar()
        return produtos.map((prod) => ({
            id: prod.id.valor,
            nome: prod.nome.completo,
            preco: prod.preco.valor,
            precoFormatado: prod.preco.formatado(),
        }))
    }
}
