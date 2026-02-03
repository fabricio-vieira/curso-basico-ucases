import Terminal from '../util/Terminal'
import RegistrarUsuario from '../../../core/usuario/service/RegistrarUsuario'
import CriptografiaPadrao from '../../auth/CriptografiaPadrao'
import RepositorioUsuarioMemoria from '../../db/RepositorioUsuarioMemoria'

export default async function registrarUsuario() {
    Terminal.titulo('Registrar Usuário')

    const nome = await Terminal.campoRequerido('Nome', { default: 'Fabricio Vieira' })
    const email = await Terminal.campoRequerido('Email', { default: 'fabricio@email.com' })
    const senha = await Terminal.campoRequerido('Senha', {
        default: '102030@As',
        echo: true,
    })
    Terminal.mostrarLogs()

    try {
        const criptografia = new CriptografiaPadrao()
        const repoUsuarioMem = RepositorioUsuarioMemoria.instance // Muda o jeito de instanciar o repo (comum: new Reposit())
        const casoDeUso = new RegistrarUsuario(repoUsuarioMem, criptografia)
        await casoDeUso.executar({ nome, email, senha })

        Terminal.sucesso(`Usuário registrado com sucesso`)
    } catch (error: any) {
        Terminal.erro(error.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
