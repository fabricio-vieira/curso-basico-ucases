import Produto from '../model/Produto'
import iCasoDeUso from '../../standards/iCasoDeUso'
import iRepositorioProduto from '../provider/iRepositorioProduto'

export default class CadastrarProduto implements iCasoDeUso<Produto, void> {
    constructor(private readonly repo: iRepositorioProduto) {}

    async executar(produto: Produto): Promise<void> {
        await this.repo.salvar(produto)
    }
}
