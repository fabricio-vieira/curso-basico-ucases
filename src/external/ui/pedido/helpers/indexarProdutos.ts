import Produto from '../../../../core/produto/model/Produto'

export default function indexarProdutos(itens: Produto[]): Map<string, Produto> {
    return new Map(itens.map((item) => [item.id.valor, item]))
}
