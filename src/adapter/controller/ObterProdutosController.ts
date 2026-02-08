import iRepositorioProduto from '../../core/produto/provider/iRepositorioProduto'
import ProdutoDTO from '../dto/ProdutoDTO'
import ObterProdutos from '../../core/produto/service/ObterProdutos'
import Produto from '../../core/produto/model/Produto'
import Conversor from '../../core/standards/Conversor'
import ProdutoParaProdutoDTO from '../converters/ProdutoParaProdutoDTO'

export default class ObterProdutosController {
    constructor(private readonly repo: iRepositorioProduto) {}

    async executar(): Promise<ProdutoDTO[]> {
        const conversorSaida: Conversor<Produto, ProdutoDTO> = {
            converter(produto: Produto): ProdutoDTO {
                return {
                    nome: produto.nome.completo,
                    preco: produto.preco.valor,
                }
            },
        }
        // const casoDeUso = new ObterProdutos(this.repo, conversorSaida) // conversor direto no controller
        const casoDeUso = new ObterProdutos(this.repo, new ProdutoParaProdutoDTO(false))
        return casoDeUso.executar()
    }
}
