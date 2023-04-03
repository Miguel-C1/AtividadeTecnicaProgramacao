import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Deletar from "./deletar";

export default class DeletarCliente extends Deletar {
    
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }
    
    public deletar(): void {
        console.log(`\nInício da exclusão do cliente`);
        let idCliente = this.entrada.receberNumero(`Por favor informe o id do cliente: `)
        let contadora = 0
        this.clientes.forEach(cliente => {
            if (cliente.getId == idCliente) {
                this.clientes.slice(contadora, 1)
                console.log(this.clientes)
                
            }
            contadora = contadora + 1
        });
    }


}