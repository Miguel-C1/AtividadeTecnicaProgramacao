import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Deletar from "./deletar";

export default class DeletarProduto extends Deletar {
    
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }
    
    public deletar(): void {
        console.log(`\nInício da exclusão do cliente`);
        let idProduto = this.entrada.receberNumero(`Por favor informe o id do produto: `)
        for (let i = 0; i < this.produtos.length; i++) {
            const cliente = this.produtos[i];
        
            if (cliente.getIdProduto === idProduto) {
              this.produtos.splice(i, i+1);
              console.log(this.produtos);
              console.log(`PRODUTO DELETADO`);
              return; // Encerrar o loop depois de remover o cliente
            }
          }
    }
}