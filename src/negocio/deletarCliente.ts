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
        for (let i = 0; i < this.clientes.length; i++) {
            const cliente = this.clientes[i];
        
            if (cliente.getId === idCliente) {
              this.clientes.splice(i, i+1);
              console.log(this.clientes);
              console.log(`CLIENTE DELETADO`);
              return; // Encerrar o loop depois de remover o cliente
            }
          }
    }
}