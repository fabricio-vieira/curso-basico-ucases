import Terminal from '../util/Terminal'
import registrarUsuario from '../usuario/registrarUsuario'
import loginUsuario from '../usuario/loginUsuario'

export default class MenuPrincipal {
    async renderizar() {
        const [_, texto] = await Terminal.menu('Menu Principal', [
            'Registrar Usuário',
            'Fazer Login',
            'Sair',
        ])

        switch (texto) {
            case 'Registrar Usuário':
                await registrarUsuario()
                break
            case 'Fazer Login':
                await loginUsuario()
                break
            case 'Sair':
                process.exit(0)
        }

        await this.renderizar()
    }
}
