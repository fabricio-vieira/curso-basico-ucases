export default class Preco {
    constructor(readonly valor: number) {
        if (!valor) throw new Error('Preço obrigatório')

        if (valor === 0) throw new Error('O preço não pode ser zero')

        if (valor <= 0) throw new Error('O preço não pode ser negativo')
    }

    formatado(padrao: string = 'pt-BR', moeda: string = 'BRL'): string {
        return Intl.NumberFormat(padrao, {
            style: 'currency',
            currency: moeda,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(Number(this.valor))
    }
}
