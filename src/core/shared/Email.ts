export default class Email {
    constructor(
        readonly valor: string,
        atributo: string = 'email'
    ) {
        if (!valor) {
            throw new Error(`O ${atributo} deve ser informado.`)
        }

        if (!valor.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)) {
            throw new Error(`O ${atributo} informado é inválido.`)
        }
    }
}
