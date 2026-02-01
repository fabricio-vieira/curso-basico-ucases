import iCasoDeUso from '../../standards/iCasoDeUso'
import iProvedorCriptografia from '../provider/iProvedorCriptografia'
import iRepositorioUsuario from '../provider/iRepositorioUsuario'
import SenhaForte from '../../shared/SenhaForte'
import Usuario from '../model/Usuario'

type Entrada = {
    nome: string
    email: string
    senha: string
}

export default class RegistrarUsuario implements iCasoDeUso<Entrada, void> {
    constructor(
        private repo: iRepositorioUsuario,
        private provedorCripto: iProvedorCriptografia
    ) {}

    async executar(entrada: Entrada): Promise<void> {
        const senha = new SenhaForte(entrada.senha)
        const usuario = new Usuario({
            nome: entrada.nome,
            email: entrada.email,
            senha: this.provedorCripto.criptografar(senha.valor),
        })
        console.log('Passou pelo Caso de Uso', usuario.props)
        await this.repo.salvar(usuario)
    }
}
