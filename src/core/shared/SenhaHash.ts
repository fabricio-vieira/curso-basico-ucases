export default class SenhaHash {
    constructor(readonly valor: string) {
        const regex = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9\.\/]{53}$/

        if (!valor || valor.trim().length === 0) {
            throw new Error('A senha deve ser informada.')
        }

        if (!valor.match(regex)) {
            throw new Error('A senha informada é inválida.')
        }
    }
}
