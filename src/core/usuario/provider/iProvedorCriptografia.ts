export default interface iProvedorCriptografia {
    criptografar(senha: string): string
    comparar(senha: string, hash: string): boolean
}
