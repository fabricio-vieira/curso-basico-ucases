import Terminal from "../util/Terminal"
import registrarUsuario from "../usuario/registrarUsuario"

export default class MenuPrincipal { 

    async renderizar() {
        const [_, texto] = await Terminal.menu("Menu Principal", [
            "Registrar Usuário",
            "Opção 2",
            "Sair",
        ])

        switch (texto) {
            case "Registrar Usuário":
                await registrarUsuario()
                break
            case "Opção 2":
                console.log("Opção 2")
                break
            case "Sair":
                process.exit(0)
        }

        await this.renderizar()
    }
}