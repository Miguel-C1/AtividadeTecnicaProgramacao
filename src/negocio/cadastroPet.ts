import Entrada from "../io/entrada"
import Pet from "../modelo/pet";

export default class CadastroPet {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public cadastrar() {
        let nome = this.entrada.receberTexto('Por favor, Digite o nome do Pet: ');
        let raca = this.entrada.receberTexto('Por favor, Digite a raça do Pet: ');
        let genero = this.entrada.receberTexto('Por favor, Digite o genêro do Pet: ');
        let tipo = this.entrada.receberTexto('Por favor, Digite o tipo do Pet: ');
        let pet = new Pet(nome, raca, genero, tipo);
        return pet
    }
}    

