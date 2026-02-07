import Produto from '../../produto/model/Produto.ts'

export default class ItemPedido {
    readonly nomeProduto: string
    readonly quantidade: number
    readonly precoUnitario: number
    readonly precoTotal: number

    constructor(produto: Produto, quantidade: number) {
        this.nomeProduto = produto.nome.completo
        this.quantidade = quantidade
        this.precoUnitario = produto.preco!.valor
        this.precoTotal = produto.preco!.valor * quantidade
    }
}
