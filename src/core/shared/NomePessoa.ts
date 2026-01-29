import NomeSimples from './NomeSimples'

export default class NomePessoa extends NomeSimples {
    constructor(valor: string, atributo: string = 'nome', min: number = 3, max: number = 60) {
        super(valor, atributo, min, max)
        if (valor.split(' ').length < 2) {
            throw new Error(`O ${atributo} deve conter pelo menos dois nomes.`)
        }
    }
    get primeiroNome() {
        return this.valor.split(' ')[0]
    }

    get ultimoNome() {
        {
            return this.valor.split(' ').slice(-1)
        }
    }

    get nomesDoMeio() {
        const partes = this.valor.split(' ')
        return partes.slice(1, -1)
    }

    get abreviacao() {
        const partes = this.valor.split(' ')
        if (partes.length <= 2) {
            return this.valor
        }
        const primeiro = partes[0]
        const ultimo = partes.slice(-1)
        const meioAbreviado = partes
            .slice(1, -1)
            .map((nome) => nome.charAt(0).toUpperCase() + '.')
            .join(' ')
        return `${primeiro} ${meioAbreviado} ${ultimo}`
    }

    get slug() {
        const nomes = this.valor
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentuação
            .replace(/[^a-zA-Z\s]/g, '') // Remove caracteres especiais
            .toLowerCase()
            .split(' ')
            .join('-')
        return nomes
    }
}
