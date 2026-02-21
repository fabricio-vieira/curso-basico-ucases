import Entidade, { EntidadeProps } from '../../standards/Entidade'
import ItemPedido, { ItemPedidoProps } from './ItemPedido'
import PedidoStatus, { TipoPedidoStatus } from './PedidoStatus'
import Preco from '../../shared/Preco'
import Usuario, { UsuarioProps } from '../../usuario/model/Usuario'

export interface PedidoProps extends EntidadeProps {
    cliente?: UsuarioProps
    data?: Date
    valorTotal?: number
    status?: TipoPedidoStatus
    itens?: ItemPedidoProps[]
}

export default class Pedido extends Entidade<Pedido, PedidoProps> {
    readonly cliente: Usuario
    readonly data: Date
    readonly valorTotal: Preco
    readonly status: PedidoStatus
    readonly itens: ItemPedido[]

    constructor(props: PedidoProps) {
        super({ ...props, valorTotal: Pedido.calcularValorTotal(props) })
        this.cliente = new Usuario(props.cliente!)
        this.data = props.data!
        this.valorTotal = new Preco(this.props.valorTotal!)
        this.status = new PedidoStatus(props.status!)
        this.itens = (props.itens ?? []).map((item) => new ItemPedido(item))
    }

    static novo(cliente: Usuario, ...itens: ItemPedido[]): Pedido {
        return new Pedido({
            cliente: cliente.props,
            data: new Date(),
            itens: itens.map((i) => i.props),
            status: PedidoStatus.ABERTO,
        })
    }

    adicionarItem(item: ItemPedido): Pedido {
        if (!item) return this
        if (!this.status.aberto) {
            throw new Error(`Não é possível adicionar itens a um pedido ${this.status.valor}}`)
        }

        const itemJaAdicionado = this.itens.find((itemPedido) =>
            itemPedido.produto.igual(item.produto)
        )

        if (!itemJaAdicionado) {
            return this.clone({
                itens: [...this.itens, item].map((i) => i.props),
            })
        }

        return this.clone({
            itens: this.itens
                .map((itemPedido) => {
                    return itemPedido.produto.igual(item.produto)
                        ? itemPedido.adicionarQuantidade(item.quantidade)
                        : itemPedido
                })
                .map((i) => i.props),
        })
    }

    removerItem(item: ItemPedido): Pedido {
        if (!item) return this
        if (!this.status.aberto) {
            throw new Error(`Não é possível remover itens de um pedido ${this.status.valor}}`)
        }

        const itemJaAdicionado = this.itens.find((itemPedido) =>
            itemPedido.produto.igual(item.produto)
        )

        if (!itemJaAdicionado) return this
        if (itemJaAdicionado.quantidade.valor - item.quantidade.valor <= 0) {
            return this.clone({
                itens: this.itens
                    .filter((itemPedido) => itemPedido.produto.diferente(item.produto))
                    .map((i) => i.props),
            })
        }

        return this.clone({
            itens: this.itens
                .map((itemPedido) => {
                    return itemPedido.produto.igual(item.produto)
                        ? itemPedido.removerQuantidade(item.quantidade)
                        : itemPedido
                })
                .map((i) => i.props),
        })
    }

    pagar(): Pedido {
        return this.clone({ status: this.status.pagar().valor })
    }

    cancelar(): Pedido {
        return this.clone({ status: this.status.cancelar().valor })
    }

    finalizar(): Pedido {
        return this.clone({ status: this.status.finalizar().valor })
    }

    private static calcularValorTotal(props: PedidoProps): number {
        if (!props.itens || props.itens.length === 0) {
            return props.valorTotal!
        }
        return props.itens
            .map((item) => new ItemPedido(item))
            .map((item) => item.valorTotal.valor)
            .reduce((a, b) => a + b)
    }
}
