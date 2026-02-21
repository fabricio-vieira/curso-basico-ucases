import Produto, { ProdutoProps } from '../../produto/model/Produto.ts'
import Preco from '../../shared/Preco.ts'
import Quantidade from '../../shared/Quantidade.ts'
import Entidade, { EntidadeProps } from '../../standards/Entidade.ts'

export interface ItemPedidoProps extends EntidadeProps {
    quantidade?: number
    valor?: number
    produto?: ProdutoProps
}

export default class ItemPedido extends Entidade<ItemPedido, ItemPedidoProps> {
    readonly quantidade: Quantidade
    readonly valor: Preco
    readonly produto: Produto

    constructor(props: ItemPedidoProps) {
        super(props)
        this.quantidade = new Quantidade(props.quantidade!)
        this.valor = new Preco(props.valor!)
        this.produto = new Produto(props.produto!)
    }

    static novo(produto: Produto, quantidade: Quantidade = new Quantidade()): ItemPedido {
        return new ItemPedido({
            produto: produto.props,
            quantidade: quantidade.valor,
            valor: produto.preco.valor,
        })
    } //Obs. O preço deve ficar armazenado no item do pedido, pois o preço do produto pode mudar depois que o pedido for criado.
    // Assim, garantimos que o valor do item do pedido seja sempre o mesmo, mesmo que o preço do produto mude.

    get valorTotal(): Preco {
        return new Preco(this.valor.valor * this.quantidade.valor)
    }

    adicionarQuantidade(quantidade: Quantidade): ItemPedido {
        return this.clone({
            quantidade: this.quantidade.somar(quantidade).valor,
        })
    }

    removerQuantidade(quantidade: Quantidade): ItemPedido {
        return this.clone({
            quantidade: this.quantidade.subtrair(quantidade).valor,
        })
    }
}
