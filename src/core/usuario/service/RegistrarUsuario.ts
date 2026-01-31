import SenhaForte from '../../shared/SenhaForte'
import CasoDeUso from '../../standards/CasoDeUso'
import Usuario from '../model/Usuario'
import ProvedorCriptografia from '../provider/ProvedorCriptografia'

type Entrada = {
    nome: string
    email: string
    senha: string
}

export default class RegistrarUsuario implements CasoDeUso<Entrada, void> {
    constructor(private provedorCriptografia: ProvedorCriptografia) {}

    async executar(entrada: Entrada): Promise<void> {
        const senha = new SenhaForte(entrada.senha)
        const usuario = new Usuario({
            nome: entrada.nome,
            email: entrada.email,
            senha: this.provedorCriptografia.criptografar(senha.valor),
        })

        console.log('fim', usuario)
    }
}
