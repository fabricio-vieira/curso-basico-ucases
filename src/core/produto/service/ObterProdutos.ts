import Produto from '../model/Produto'
import iCasoDeUso from '../../standards/iCasoDeUso'
import iRepositorioProduto from '../provider/iRepositorioProduto'
import Conversor from '../../standards/Conversor'

export default class ObterProdutos implements iCasoDeUso<void, any[]> {
    constructor(
        private repo: iRepositorioProduto,
        private conversor: Conversor<Produto, any>
    ) {}

    async executar(): Promise<any[]> {
        const produtos = await this.repo.listarTodos()
        return produtos.map((prod) => this.conversor.converter(prod))
    }
}
