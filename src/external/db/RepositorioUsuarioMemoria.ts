import Usuario from '../../core/usuario/model/Usuario'
import iRepositorioUsuario from '../../core/usuario/provider/iRepositorioUsuario'
export default class RepositorioUsuarioMemoria implements iRepositorioUsuario {
    static readonly instance = new RepositorioUsuarioMemoria() // Padrão Singletom
    private constructor(private usuarios: Usuario[] = []) {} // Dessa forma ele instancia o objeto que já existe mantendo as informações anteriores

    // constructor(private usuarios: Usuario[] = []) {} // Padrão convencional => Cada caso de uso gera uma nova instancia (inviavel para tratar dados em memória)

    async salvar(usuario: Usuario): Promise<void> {
        this.usuarios.push(usuario)
        console.log('Chegou no banco de memoria e salvou')
        return Promise.resolve()
    }
    async listarTodos(): Promise<Usuario[]> {
        return this.usuarios
    }
    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return this.usuarios.find((user) => user.email.valor === email) ?? null
    }
}
