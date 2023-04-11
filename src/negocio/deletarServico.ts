import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Deletar from "./deletar";

export default class DeletarProduto extends Deletar {
    
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }
    
    public deletar(): void {
        console.log(`\nInício da exclusão do cliente`);
        let idServico = this.entrada.receberNumero(`Por favor informe o id do servico: `)
        for (let i = 0; i < this.servicos.length; i++) {
            const cliente = this.servicos[i];
        
            if (cliente.getIdServico === idServico) {
              this.servicos.splice(i, i+1);
              console.log(this.servicos);
              console.log(`SERVIÇO DELETADO`);
              return; // Encerrar o loop depois de remover o cliente
            }
          }
    }
}