import Usuario from '../model/Usuario'
export default interface iRepositorioUsuario {
    salvar(usuario: Usuario): Promise<void>
    listarTodos(): Promise<Usuario[]>
    buscarPorEmail(email: string): Promise<Usuario | null>
}
