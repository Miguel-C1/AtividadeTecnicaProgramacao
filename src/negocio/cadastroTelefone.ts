import Telefone from "../modelo/telefone";
import Entrada from "../io/entrada"

export default class CadastroTelefone {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public cadastrar() {
        let ddd = this.entrada.receberTexto('Por favor, Digite o DDD do Telefone: ');
        let numero = this.entrada.receberTexto('Por favor, Digite o número do Telefone: ');
        let telefone = new Telefone(ddd, numero);
        return telefone
    }
}    

