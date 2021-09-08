export default class Client {
      id: string
      nome: string
      idade: number

    constructor(nome: string, idade: number, id: string = null) {
        this.nome = nome
        this.idade = idade
        this.id = id
    }

    static vazio() {
        return new Client('', 0)
    }

    get clientId() {
        return this.id
    }

    get clientNome() {
        return this.nome
    }

    get clientIdade() {
        return this.idade
    }
}