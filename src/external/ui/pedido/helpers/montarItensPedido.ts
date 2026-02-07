import { ItemDTO } from '../../dtos/ItemDto'
import Produto from '../../../../core/produto/model/Produto'
import ItemPedido from '../../../../core/pedido/model/ItemPedido'

export default function montarItensPedido(
    itens: ItemDTO[],
    produtoIndexado: Map<string, Produto>
): ItemPedido[] {
    const itensPedido = itens.map((item) => {
        const produtoId = item.produtoId.trim()
        const produto = produtoIndexado.get(produtoId)

        if (!produto) {
            throw new Error(`Produto com ID ${item.produtoId} não encontrado.`)
        }
        return new ItemPedido(produto, item.quantidade)
    })

    return itensPedido
}
