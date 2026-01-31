import Entidade, { EntidadeProps } from '../../standards/Entidade'
import NomePessoa from '../../shared/NomePessoa'
import Email from '../../shared/Email'

export interface UsuarioProps extends EntidadeProps {
    nome?: string
    email?: string
    senha?: string
}

export default class Usuario extends Entidade<Usuario, UsuarioProps> {
    readonly nome: NomePessoa
    readonly email: Email
    readonly senha: string
    constructor(props: UsuarioProps) {
        super(props)

        this.nome = new NomePessoa(props.nome!)
        this.email = new Email(props.email!)
        this.senha = props.senha ?? ''
    }
}
