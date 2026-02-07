import { ItemInput } from '../../dtos/ItemInput'
import { ItemDTO } from '../../dtos/ItemDto'

export default function agruparItens(itens: ItemInput[]): ItemDTO[] {
    const agrupados = itens.reduce<Record<string, ItemDTO>>((acc, item) => {
        const id = item.produtoId.trim()
        if (!acc[id]) {
            acc[id] = { produtoId: id, quantidade: item.quantidade }
        } else {
            acc[id].quantidade += item.quantidade
        }

        return acc
    }, {})

    return Object.values(agrupados)
}
