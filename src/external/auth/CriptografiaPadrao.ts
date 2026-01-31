import { hashSync, compare, genSalt, genSaltSync } from 'bcrypt'
import ProvedorCriptografia from '../../core/usuario/provider/ProvedorCriptografia'

export default class CriptografiaPadrao implements ProvedorCriptografia {
    criptografar(senha: string): string {
        const salt = genSaltSync(11)
        return hashSync(senha, salt)
    }

    comparar(senha: string, hash: string): boolean {
        const senhaCriptografada = this.criptografar(senha)
        return senhaCriptografada === hash
    }
}
