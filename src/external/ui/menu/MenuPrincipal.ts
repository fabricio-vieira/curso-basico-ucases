import finalizarPedido from '../pedidoPRO/finalizarPedido'
import cadastrarProduto from '../produto/cadastrarProduto'
import listarProdutos from '../pedidoPRO/listarProdutosMenu'
import listarUsuarios from '../usuario/listarUsuarios'
import loginUsuario from '../usuario/loginUsuario'
import registrarUsuario from '../usuario/registrarUsuario'
import Carrinho from '../util/Carrinho'
import Sessao from '../util/Sessao'
import Terminal from '../util/Terminal'

export default class MenuPrincipal {
    async renderizar() {
        const usuario = Sessao.usuario
        const totalCarrinho = Carrinho.pedido?.valorTotalFormatado ?? 'R$ 0,00'

        const [_, texto] = await Terminal.menu(
            `Menu Principal${usuario ? ` - (${usuario.email.valor}) - ${totalCarrinho}` : ''}`,
            usuario
                ? [
                      'Listar Usuários',
                      'Cadastrar Produto',
                      'Listar Produtos',
                      'Finalizar Pedido',
                      'Deslogar',
                  ]
                : ['Registrar Usuário', 'Login Usuário', 'Sair']
        )

        switch (texto) {
            case 'Registrar Usuário':
                await registrarUsuario()
                break
            case 'Login Usuário':
                await loginUsuario()
                break
            case 'Listar Usuários':
                await listarUsuarios()
                break
            case 'Cadastrar Produto':
                await cadastrarProduto()
                break
            case 'Listar Produtos':
                await listarProdutos()
                break
            case 'Finalizar Pedido':
                await finalizarPedido()
                break
            case 'Deslogar':
                Sessao.finalizar()
                break
            case 'Sair':
                process.exit(0)
        }

        await this.renderizar()
    }
}
