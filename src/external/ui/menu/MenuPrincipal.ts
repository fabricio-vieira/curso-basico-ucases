import Terminal from '../util/Terminal'
import registrarUsuario from '../usuario/registrarUsuario'
import loginUsuario from '../usuario/loginUsuario'
import Sessao from '../util/Sessao'

export default class MenuPrincipal {
    async renderizar() {
        const usuarioLogado = Sessao.usuario
        const [_, texto] = await Terminal.menu(
            `Menu Principal${usuarioLogado ? ` - Usuário Logado: ${usuarioLogado.nome.completo}` : ''}`,
            usuarioLogado
                ? ['Listar Usuários', 'Fazer Logout']
                : ['Registrar Usuário', 'Fazer Login', 'Sair']
        )

        switch (texto) {
            case 'Registrar Usuário':
                await registrarUsuario()
                break
            case 'Fazer Login':
                await loginUsuario()
                break
            case 'Fazer Logout':
                Sessao.finalizar()
                break
            case 'Sair':
                process.exit(0)
        }

        await this.renderizar()
    }
}
