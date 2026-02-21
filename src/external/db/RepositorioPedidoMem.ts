import Pedido from '../../core/pedidoPRO/model/Pedido'
import iRepositorioPedidoPRO from '../../core/pedidoPRO/provider/iRepositorioPedidoPRO'

export default class RepositorioPedidoMemoria implements iRepositorioPedidoPRO {
    static readonly instance = new RepositorioPedidoMemoria() // Padrão Singletom
    private constructor(private pedidos: Pedido[] = []) {} // Dessa forma ele instancia o objeto que já existe mantendo as informações anteriores

    // constructor(private produtos: Produto[] = []) {} // Padrão convencional => Cada caso de uso gera uma nova instancia (inviavel para tratar dados em memória)

    async salvar(pedido: Pedido): Promise<void> {
        this.pedidos.push(pedido) // Apenas para simular o salvamento
    }
    async listarTodos(): Promise<Pedido[]> {
        return this.pedidos
    }
    async buscarPorId(id: string): Promise<Pedido | null> {
        return this.pedidos.find((ped) => ped.id.valor === id) ?? null
    }
}
