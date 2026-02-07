import Pedido from '../../core/pedido/model/Pedido'
import iRepositorioPedido from '../../core/pedido/provider/iRepositorioPedido'
import ItensPedido from '../../core/pedido/model/ItemPedido'

export default class RepositorioPedidoMemoria implements iRepositorioPedido {
    static readonly instance = new RepositorioPedidoMemoria() // Padrão Singletom
    private constructor(private pedidos: Pedido[] = []) {} // Dessa forma ele instancia o objeto que já existe mantendo as informações anteriores

    // constructor(private produtos: Produto[] = []) {} // Padrão convencional => Cada caso de uso gera uma nova instancia (inviavel para tratar dados em memória)

    async cadastrar(pedido: Pedido): Promise<void> {
        this.pedidos.push(pedido) // Apenas para simular o salvamento
        console.log('Chegou no banco de memoria e salvou o pedido')
        return Promise.resolve()
    }
    async listarTodos(): Promise<Pedido[]> {
        return this.pedidos
    }
    async buscarPorId(id: string): Promise<Pedido | null> {
        return this.pedidos.find((ped) => ped.id.valor === id) ?? null
    }
}
