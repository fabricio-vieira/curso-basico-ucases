export default class SenhaForte {
    constructor(
        readonly valor: string,
        atributo: string = 'senha'
    ) {
        if (!valor) {
            throw new Error(`A ${atributo} deve ser informada.`)
        }

        if (valor.length < 8) {
            throw new Error(`A ${atributo} deve ter no mínimo 8 caracteres.`)
        }

        if (!valor.match(/[A-Z]/)) {
            throw new Error(`A ${atributo} deve conter ao menos uma letra maiúscula.`)
        }

        if (!valor.match(/[a-z]/)) {
            throw new Error(`A ${atributo} deve conter ao menos uma letra minúscula.`)
        }

        if (!valor.match(/[0-9]/)) {
            throw new Error(`A ${atributo} deve conter ao menos um número.`)
        }

        if (!valor.match(/[^A-Za-z0-9]/)) {
            throw new Error(`A ${atributo} deve conter ao menos um caractere especial.`)
        }
        console.log(`Validou a senha ${valor} como forte`)
    }
}
