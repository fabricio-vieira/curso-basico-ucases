export default class Quantidade {
    constructor(readonly valor: number = 1) {
        if (!valor) {
            throw new Error('Quantidade é obrigatória')
        }
        if (valor <= 0) {
            throw new Error('Quantidade deve ser maior que zero')
        }
    }

    somar(quantidade: Quantidade): Quantidade {
        return new Quantidade(this.valor + quantidade.valor)
    }

    subtrair(quantidade: Quantidade): Quantidade {
        return new Quantidade(this.valor - quantidade.valor)
    }
}
