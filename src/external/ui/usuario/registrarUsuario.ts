import Terminal from "../util/Terminal";

export default async function registrarUsuario() {
    Terminal.titulo("Registrar Usuário")

    const nome = await Terminal.campoRequerido("Nome")
    const email = await Terminal.campoRequerido("Email")
    const senha = await Terminal.campoRequerido("Senha", { echo: false})
    
    Terminal.sucesso(`Usuário ${nome} registrado com sucesso`)
    Terminal.sucesso(`Email ${email} registrado com sucesso`)
    Terminal.sucesso(`Senha ${senha} registrado com sucesso`)

    await Terminal.esperarEnter()
}