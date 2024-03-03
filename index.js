class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque genérico";
        }

        const mensagem = `o ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando ${ataque}`;
        console.log(mensagem);
    }
}
const heroi1 = new Heroi("Gandalf", 1000, "mago");

heroi1.atacar();
