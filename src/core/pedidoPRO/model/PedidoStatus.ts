export type TipoPedidoStatus = 'ABERTO' | 'PAGO' | 'CANCELADO' | 'FINALIZADO'

export default class PedidoStatus {
    static readonly ABERTO = 'ABERTO'
    static readonly PAGO = 'PAGO'
    static readonly CANCELADO = 'CANCELADO'
    static readonly FINALIZADO = 'FINALIZADO'

    readonly valor: TipoPedidoStatus

    constructor(valor: TipoPedidoStatus) {
        this.valor = valor ?? PedidoStatus.ABERTO
    }

    get aberto(): boolean {
        return this.valor === PedidoStatus.ABERTO
    }

    get pago(): boolean {
        return this.valor === PedidoStatus.PAGO
    }

    get cancelado(): boolean {
        return this.valor === PedidoStatus.CANCELADO
    }

    get finalizado(): boolean {
        return this.valor === PedidoStatus.FINALIZADO
    }

    pagar(): PedidoStatus {
        if (this.valor === PedidoStatus.CANCELADO) {
            throw new Error('Não é possível pagar um pedido cancelado')
        }
        if (this.valor === PedidoStatus.FINALIZADO) {
            throw new Error('Não é possível pagar um pedido finalizado')
        }
        if (this.valor === PedidoStatus.PAGO) return this
        return new PedidoStatus(PedidoStatus.PAGO)
    }

    cancelar(): PedidoStatus {
        if (this.valor === PedidoStatus.FINALIZADO) {
            throw new Error('Não é possível cancelar um pedido finalizado')
        }
        if (this.valor === PedidoStatus.CANCELADO) return this
        return new PedidoStatus(PedidoStatus.CANCELADO)
    }

    finalizar(): PedidoStatus {
        if (this.valor === PedidoStatus.CANCELADO) {
            throw new Error('Não é possível finalizar um pedido cancelado')
        }
        if (this.valor === PedidoStatus.FINALIZADO) return this
        return new PedidoStatus(PedidoStatus.FINALIZADO)
    }
}
