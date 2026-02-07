import Produto from '../../../../core/produto/model/Produto'

export default function menuItensPedido(produtos: Produto[]): string[] {
    return [
        ...produtos.map((p) => `${p.id.valor} - ${p.nome.completo} - ${p.preco.valor}`),
        'Finalizar Pedido',
    ]
}
