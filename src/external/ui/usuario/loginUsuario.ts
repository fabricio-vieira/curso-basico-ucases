import Terminal from '../util/Terminal'
import LoginUsuario from '../../../core/usuario/service/LoginUsuario'
import CriptografiaPadrao from '../../auth/CriptografiaPadrao'
import RepositorioUsuarioMemoria from '../../db/RepositorioUsuarioMemoria'
import Sessao from '../util/Sessao'

export default async function loginUsuario() {
    Terminal.titulo('Login Usuário')

    const email = await Terminal.campoRequerido('Email', { default: 'fabricio@email.com' })
    const senha = await Terminal.campoRequerido('Senha', {
        default: '102030@As',
        echo: true,
    })
    Terminal.mostrarLogs()

    try {
        const criptografia = new CriptografiaPadrao()
        const repoUsuarioMem = RepositorioUsuarioMemoria.instance // Muda o jeito de instanciar o repo (comum: new Reposit())
        const casoDeUso = new LoginUsuario(repoUsuarioMem, criptografia)
        const usuario = await casoDeUso.executar({ email, senha })
        Sessao.iniciar(usuario)
        console.log('usuario logado', usuario.props)
        Terminal.sucesso(`Usuário ${usuario.nome.completo} Logado com sucesso`)
    } catch (error: any) {
        Terminal.erro(error.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
