import Terminal from '../util/Terminal'
import Sessao from '../util/Sessao'
import registrarUsuario from '../usuario/registrarUsuario'
import loginUsuario from '../usuario/loginUsuario'
import listarUsuarios from '../usuario/listarUsuarios'
import listarProdutos from '../produto/listarProdutos'
import cadastrarProduto from '../produto/cadastrarProduto'
import gerarPedido from '../pedido/gerarPedido'

export default class MenuPrincipal {
    async renderizar() {
        const usuarioLogado = Sessao.usuario
        const [_, texto] = await Terminal.menu(
            `Menu Principal${usuarioLogado ? ` - Usuário Logado: ${usuarioLogado.nome.completo}` : ''}`,
            usuarioLogado
                ? [
                      'Cadastrar Produtos',
                      'Listar Usuários',
                      'Listar Produtos',
                      'Fazer Pedido',
                      'Fazer Logout',
                  ]
                : ['Registrar Usuário', 'Fazer Login', 'Sair']
        )

        switch (texto) {
            case 'Registrar Usuário':
                await registrarUsuario()
                break
            case 'Fazer Login':
                await loginUsuario()
                break
            case 'Listar Usuários':
                await listarUsuarios()
                break
            case 'Listar Produtos':
                await listarProdutos()
                break
            case 'Cadastrar Produtos':
                await cadastrarProduto()
                break
            case 'Fazer Pedido':
                await gerarPedido()
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
