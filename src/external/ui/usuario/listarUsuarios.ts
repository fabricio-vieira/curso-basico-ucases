import Terminal from '../util/Terminal'
import ObterUsuarios from '../../../core/usuario/service/ObterUsuarios'
import RepositorioUsuarioMemoria from '../../db/RepositorioUsuarioMemoria'

export default async function listarUsuarios() {
    Terminal.titulo('Listar Usuários')

    try {
        const repoUsuarioMem = RepositorioUsuarioMemoria.instance // Muda o jeito de instanciar o repo (comum: new Reposit())
        const casoDeUso = new ObterUsuarios(repoUsuarioMem)
        const usuarios = await casoDeUso.executar()
        Terminal.sucesso(`Abaixo relação de Usuários`)
        Terminal.tabel(
            usuarios.map((u) => ({
                id: u.id.valor,
                nome: u.nome.completo,
                email: u.email.valor,
            }))
        )
    } catch (error: any) {
        Terminal.erro(error.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
