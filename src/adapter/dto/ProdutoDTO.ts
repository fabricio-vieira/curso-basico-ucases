// Dados extraidos do modelo complexo no formato mais simples
// que será preparado para ser mostrado para determinada interface

import { ProdutoProps } from '../../core/produto/model/Produto'

export default interface ProdutoDTO extends ProdutoProps {
    precoFormatado?: string
}
