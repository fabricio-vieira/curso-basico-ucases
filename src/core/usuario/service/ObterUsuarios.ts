import Usuario from '../model/Usuario'
import iCasoDeUso from '../../standards/iCasoDeUso'
import iRepositorioUsuario from '../provider/iRepositorioUsuario'

export default class ObterUsuarios implements iCasoDeUso<void, Usuario[]> {
    constructor(private repo: iRepositorioUsuario) {}

    async executar(): Promise<Usuario[]> {
        const usuarios = await this.repo.listarTodos()
        return usuarios.map((u) => u.semSenha())
    }
}
