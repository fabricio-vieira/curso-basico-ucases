import Produto from '../../core/produto/model/Produto'
import ProdutoDTO from '../dto/ProdutoDTO'
import Conversor from '../../core/standards/Conversor'

export default class ProdutoParaProdutoDTO implements Conversor<Produto, ProdutoDTO> {
    constructor(private temId: boolean = true) {}
    converter(produto: Produto): ProdutoDTO {
        const produtoDTO: ProdutoDTO = {
            id: produto.id.valor,
            nome: produto.nome.completo,
            preco: produto.preco.valor,
            precoFormatado: produto.preco.formatado(),
        }

        if (this.temId) produtoDTO.id = produto.id.valor
        return produtoDTO
    }
}
