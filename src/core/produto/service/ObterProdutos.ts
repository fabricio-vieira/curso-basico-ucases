import Produto from '../model/Produto'
import iCasoDeUso from '../../standards/iCasoDeUso'
import iRepositorioProduto from '../provider/iRepositorioProduto'

export default class ObterUsuarios implements iCasoDeUso<void, Produto[]> {
    constructor(private repo: iRepositorioProduto) {}

    async executar(): Promise<Produto[]> {
        return await this.repo.listarTodos()
    }
}
