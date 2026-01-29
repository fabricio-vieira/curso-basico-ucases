export default class NomeSimples {
    constructor(
        readonly valor: string,
        atributo: string = 'nome',
        min: number = 3,
        max: number = 60
    ) {
        if (!valor || valor.trim().length === 0) {
            throw new Error(`O ${atributo} não pode ser vazio.`)
        }

        if (valor.trim().length < min || valor.trim().length > max) {
            throw new Error(`O ${atributo} deve ter entre ${min} e ${max} caracteres.`)
        }

        if (min > max) {
            throw new Error('Tamanho mínimo não pode ser maior que o máximo.')
        }
    }
}
