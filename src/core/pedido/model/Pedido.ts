// import Entidade, { EntidadeProps } from '../../standards/Entidade'
// import ItemPedido from './ItemPedido'
// import { UsuarioProps } from '../../usuario/model/Usuario'
// import Descricao from '../../shared/Descricao'

// export interface PedidoProps extends EntidadeProps {
//     usuario: UsuarioProps
//     // descricao?: string
//     itens: ItemPedido[]
//     total?: number
// }

// export default class Pedido extends Entidade<Pedido, PedidoProps> {
//     readonly usuario: UsuarioProps
//     readonly itens: ItemPedido[]
//     // readonly descricao: Descricao
//     readonly total: number

//     constructor(props: PedidoProps) {
//         super(props)

//         this.usuario = props.usuario
//         this.itens = props.itens
//         this.total = props.itens.reduce((acc, item) => acc + item.precoTotal, 0)
//         // this.descricao = new Descricao(props.descricao!)
//     }
// }
