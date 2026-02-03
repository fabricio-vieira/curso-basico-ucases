import Produto from '../../core/produto/model/Produto'
import iRepositorioProduto from '../../core/produto/provider/iRepositorioProduto'

export default class RepositorioProdutoMemoria implements iRepositorioProduto {
    static readonly instance = new RepositorioProdutoMemoria() // Padrão Singletom
    private constructor(private produtos: Produto[] = []) {} // Dessa forma ele instancia o objeto que já existe mantendo as informações anteriores

    // constructor(private produtos: Produto[] = []) {} // Padrão convencional => Cada caso de uso gera uma nova instancia (inviavel para tratar dados em memória)

    async salvar(produto: Produto): Promise<void> {
        this.produtos.push(produto)
        console.log('Chegou no banco de memoria e salvou')
        return Promise.resolve()
    }
    async listarTodos(): Promise<Produto[]> {
        return this.produtos
    }
    async buscarPorId(id: string): Promise<Produto | null> {
        return this.produtos.find((prod) => prod.id.valor === id) ?? null
    }
}
