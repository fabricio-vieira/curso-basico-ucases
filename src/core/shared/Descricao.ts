export default class Descricao {
    constructor(
        readonly valor: string,
        min: number = 20,
        max: number = 80
    ) {
        if (min > max) {
            throw new Error('Tamanho mínimo não pode ser maior que o máximo.')
        }

        if (!valor || valor.trim().length === 0) {
            throw new Error(`O descrição deve ser informada.`)
        }

        if (valor.trim().length < min || valor.trim().length > max) {
            throw new Error(`O descrição deve ter entre ${min} e ${max} caracteres.`)
        }
        console.log('Passou pelas validações de descrição simples')
    }
}
