import Usuario from '../usuario/model/Usuario'

export default interface CasoDeUso<Input, Output> {
    executar(entrada: Input): Promise<Output>
}
