export default class NomeSimples {
    constructor(
        readonly completo: string,
        atributo: string = 'nome',
        min: number = 3,
        max: number = 60
    ) {
        if (min > max) {
            throw new Error('Tamanho mínimo não pode ser maior que o máximo.')
        }

        if (!completo || completo.trim().length === 0) {
            throw new Error(`O ${atributo} deve ser informado.`)
        }

        if (completo.trim().length < min || completo.trim().length > max) {
            throw new Error(`O ${atributo} deve ter entre ${min} e ${max} caracteres.`)
        }
    }
}
