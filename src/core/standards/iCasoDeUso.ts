export default interface iCasoDeUso<Input, Output> {
    executar(entrada: Input): Promise<Output>
}
