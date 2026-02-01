import bcrypt from 'bcrypt'
import iProvedorCriptografia from '../../core/usuario/provider/iProvedorCriptografia'

export default class CriptografiaPadrao implements iProvedorCriptografia {
    criptografar(senha: string): string {
        const salt = bcrypt.genSaltSync(11)
        console.log('senha antes da criptografia', senha)
        return bcrypt.hashSync(senha, salt)
    }

    comparar(senha: string, hash: string): boolean {
        console.log('senha para comparar', senha)
        console.log('hash para comparar', hash)
        return bcrypt.compareSync(senha, hash)
    }
}
