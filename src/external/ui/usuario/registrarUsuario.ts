import Terminal from '../util/Terminal'
import Usuario from '../../../core/usuario/model/Usuario'

export default async function registrarUsuario() {
    Terminal.titulo('Registrar Usuário')

    const nome = await Terminal.campoRequerido('Nome', { default: 'Fabricio Vieira' })
    const email = await Terminal.campoRequerido('Email', { default: 'fabricio@email.com' })
    const senha = await Terminal.campoRequerido('Senha', {
        default: '$2a$11$ZQhxJdtVjs1Dez0Ig04CPOUO1u78uvAVs.Pa.gG1O9VLSjYTwaswa',
        echo: false,
    })

    try {
        const usuario = new Usuario({ nome, email, senha })
        Terminal.sucesso(`Usuário ${usuario.nome.completo} registrado com sucesso`)
        // Terminal.sucesso(`Email ${email} registrado com sucesso`)
        // Terminal.sucesso(`Senha ${senha} registrado com sucesso`)
    } catch (error: any) {
        Terminal.erro(error.message)
    } finally {
        await Terminal.esperarEnter()
    }
}
