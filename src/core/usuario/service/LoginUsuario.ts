import iCasoDeUso from '../../standards/iCasoDeUso'
import Usuario from '../model/Usuario'
import Email from '../../shared/Email'
import iRepositorioUsuario from '../provider/iRepositorioUsuario'
import iProvedorCriptografia from '../provider/iProvedorCriptografia'

type Entrada = {
    email: string
    senha: string
}

export default class LoginUsuario implements iCasoDeUso<Entrada, Usuario> {
    constructor(
        private repo: iRepositorioUsuario,
        private cripto: iProvedorCriptografia
    ) {}

    async executar(entrada: Entrada): Promise<Usuario> {
        const email = new Email(entrada.email)

        const usuario = await this.repo.buscarPorEmail(email.valor)
        if (!usuario) throw new Error('Usuário não existe')

        const senhaConfere = this.cripto.comparar(entrada.senha, usuario.senha!.hash)
        if (!senhaConfere) throw new Error('Usuario e/ou Senha não confere')

        console.log('Passou pelo login de usuario')

        return usuario
    }
}
