export default class SenhaHash {
    constructor(readonly hash: string) {
        const regex = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9\.\/]{53}$/

        if (!hash || hash.trim().length === 0) {
            throw new Error('A senha deve ser informada.')
        }

        if (!hash.match(regex)) {
            throw new Error('A senha informada é inválida.')
        }

        console.log(`validou o hash`, hash)
    }
}
