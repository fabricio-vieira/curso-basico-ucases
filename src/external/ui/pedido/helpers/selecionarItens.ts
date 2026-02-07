import { terminal } from 'terminal-kit'
import { ItemDTO } from '../../dtos/ItemDto'

export default async function selecionarItens(produtos: string[]): Promise<ItemDTO[]> {
    const itensPedido = []

    while (true) {
        terminal.clear()
        terminal.cyan('--- Selecione o Produto ---\n')

        // 1. Menu de Produtos
        const selecao = await terminal.singleColumnMenu(produtos).promise

        if (selecao.selectedIndex === produtos.length - 1) {
            terminal.yellow('\nVoltando à lista...\n')
            return itensPedido // Retorna os itens selecionados até o momento para finalizar o pedido
            // break // Sai do while e encerra a função
        }

        const produtoEscolhido = selecao.selectedText
        terminal.nextLine(1).green(`Você escolheu: ${produtoEscolhido}\n`)
        const produtoId = produtoEscolhido.split(' - ')[0].trim()

        // 2. Input de Quantidade
        terminal.cyan('Digite a quantidade: ')
        const quantidadeString = await terminal.inputField().promise
        const quantidade = Number(quantidadeString)

        terminal.nextLine(1)

        // 3. Confirmação
        terminal.yellow(`Confirma add ${quantidade}x ${produtoEscolhido} no carrinho? [s/n]\n`)
        const confirmaOpcao = await terminal.yesOrNo({ yes: ['s', 'S'], no: ['n', 'N'] }).promise

        if (confirmaOpcao) {
            terminal.green('\nItem adicionado com sucesso!\n')
            itensPedido.push({ produtoId, quantidade })
        } else {
            terminal.red('\nCancelado. Retornando...\n')
            await new Promise((res) => setTimeout(res, 800)) // Reinicia o fluxo
        }
    }
}
