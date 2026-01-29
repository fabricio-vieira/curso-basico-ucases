import { terminal } from "terminal-kit"
import { InputFieldOptions } from "terminal-kit/Terminal"

export default class Terminal {

    static titulo(texto: string) {
        terminal.clear()
        terminal.bold.magenta(`\n${texto}\n \n`)
        terminal.bold.magenta('-'.repeat(texto.length))
    }

    static async menu(titulo: string, opcoes: string[]){
        Terminal.titulo(titulo)
        const opcao = await terminal.singleColumnMenu(opcoes).promise
        return [opcao.selectedIndex, opcao.selectedText]
    }

    static async esperarEnter(): Promise<void> {
        terminal.white('\nPressione ENTER para continuar...')
        await terminal.inputField({ echo: false}).promise // Echo não mostra o que o usuário digita
    }

    static async campoRequerido(label:string, opcoes?: InputFieldOptions): Promise<string> {
        terminal.gray(`\n${label}: `)
        const valor = await terminal.inputField(opcoes).promise
        if(valor?.trim()) return valor 
        return Terminal.campoRequerido(label, opcoes)
    }

    static sucesso(texto: string, novaLinha = true) {
        terminal.green(`${novaLinha ? "\n" : ""}${texto}`)
    }
}